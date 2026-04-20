const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export async function generateCoverLetter(params) {
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "user",
              content: `Write a ${params.tone} cover letter in ${params.language} for a ${params.position} position at ${params.company}. My skills: ${params.skills}.`,
            },
          ],
        }),
      },
    );

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      console.error("API error:", data);
      throw new Error(data.error?.message || "API error");
    }

    return data.choices?.[0]?.message?.content || "No response";
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}
