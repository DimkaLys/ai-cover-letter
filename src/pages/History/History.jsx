import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from "../../store/slices/lettersSlice";

function History() {
  const letters = useSelector((state) => {
    // console.log(state);
    return state.letters.letters;
  });
  const dispatch = useDispatch();

  if (letters.length === 0) {
    return <p style={{ color: "#fff", padding: "32px" }}>No letters yet</p>;
  }

  return (
    <main style={styles.main}>
      <div style={styles.header}>
        <h1 style={styles.heading}>History</h1>
        <button
          onClick={() => dispatch(clearHistory())}
          style={styles.clearBtn}
        >
          Clear History
        </button>
      </div>

      {letters.map((letter) => (
        <div key={letter.id} style={styles.card}>
          <div style={styles.meta}>
            <span style={styles.position}>
              {letter.position} at {letter.company}
            </span>
            <span style={styles.date}>{letter.date}</span>
          </div>
          <p style={styles.content}>{letter.content}</p>
          <button
            onClick={() => navigator.clipboard.writeText(letter.content)}
            style={styles.copyBtn}
          >
            Copy
          </button>
        </div>
      ))}
    </main>
  );
}

const styles = {
  main: { padding: "32px", backgroundColor: "#0a0a0a", minHeight: "100vh" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  heading: { color: "#fff" },
  card: {
    backgroundColor: "#1c1c1c",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "16px",
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
  },
  position: { color: "#e94560", fontWeight: "bold" },
  date: { color: "#888" },
  content: { color: "#ccc", lineHeight: 1.6, marginBottom: "16px" },
  copyBtn: {
    padding: "8px 16px",
    backgroundColor: "#e94560",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  clearBtn: {
    padding: "8px 16px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default History;
