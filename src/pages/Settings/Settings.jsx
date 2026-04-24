import { useSelector, useDispatch } from "react-redux";
import { setTone, setLanguage } from "../../store/slices/settingsSlice";

function Settings() {
  const { language, tone } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <main style={styles.main}>
      <h1 style={styles.heading}>Settings</h1>
      <div style={styles.field}>
        <label style={styles.label}>Default Language</label>
        <select
          value={language}
          onChange={(e) => dispatch(setLanguage(e.target.value))}
          style={styles.select}
        >
          <option value="English">English</option>
          <option value="Ukrainian">Ukrainian</option>
        </select>
      </div>
      <div style={styles.field}>
        <label style={styles.label}>Default Tone</label>
        <select
          value={tone}
          onChange={(e) => dispatch(setTone(e.target.value))}
          style={styles.select}
        >
          <option value="formal">Formal</option>
          <option value="casual">Casual</option>
        </select>
      </div>
    </main>
  );
}

const styles = {
  main: { padding: "32px", backgroundColor: "#0a0a0a", minHeight: "100vh" },
  heading: { color: "#fff", marginBottom: "32px" },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    maxWidth: "400px",
    marginBottom: "24px",
  },
  label: { color: "#888", fontSize: "14px" },
  select: {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #333",
    backgroundColor: "#1c1c1c",
    color: "#fff",
    fontSize: "15px",
  },
};

export default Settings;
