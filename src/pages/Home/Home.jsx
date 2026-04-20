import { useState } from "react";
import { generateCoverLetter } from "../../services/api";

function Home() {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [tone, setTone] = useState("formal");
  const [language, setLanguage] = useState("English");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const text = await generateCoverLetter({
        position,
        company,
        skills,
        tone,
        language,
      });

      setResult(text);
      setPosition("");
      setCompany("");
      setSkills("");
      setTone("formal");
      setLanguage("English");
    } catch (err) {
      console.error(err);
      setResult("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={styles.main}>
      <h1 style={styles.heading}>Generate Cover Letter</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="position"
          type="text"
          placeholder="Position (e.g. React Developer)"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          style={styles.input}
        />

        <input
          name="company"
          type="text"
          placeholder="Company (e.g. Google)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={styles.input}
        />

        <textarea
          name="skills"
          placeholder="Your skills (e.g. React, JavaScript, CSS)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          style={styles.textarea}
        />

        <select
          name="tone"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          style={styles.input}
        >
          <option value="formal">Formal</option>
          <option value="casual">Casual</option>
        </select>

        <select
          name="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={styles.input}
        >
          <option value="English">English</option>
          <option value="Ukrainian">Ukrainian</option>
        </select>

        <button
          name="generate"
          type="submit"
          style={styles.button}
          disabled={loading}
        >
          {loading ? "Generating" : "Generate Cover Letter"}
        </button>
      </form>
      {result && (
        <div style={{ color: "#fff", marginTop: "20px" }}>
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </main>
  );
}

const styles = {
  main: { padding: "32px", backgroundColor: "#0a0a0a", minHeight: "100vh" },
  heading: { color: "#fff", marginBottom: "24px", textAlign: "center" },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  input: {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #333",
    backgroundColor: "#1c1c1c",
    color: "#fff",
    fontSize: "15px",
  },
  textarea: {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #333",
    backgroundColor: "#1c1c1c",
    color: "#fff",
    fontSize: "15px",
    height: "120px",
    resize: "vertical",
  },
  button: {
    padding: "14px",
    backgroundColor: "#e94560",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Home;
