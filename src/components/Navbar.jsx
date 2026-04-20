import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        ✉️ CoverAI
      </Link>
      <div style={styles.links}>
        <Link to="/history" style={styles.link}>
          History
        </Link>
        <Link to="/settings" style={styles.link}>
          Settings
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#1a1a2e",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    color: "#e94560",
    fontSize: "22px",
    fontWeight: "bold",
    textDecoration: "none",
  },
  links: { display: "flex", gap: "24px" },
  link: { color: "#fff", textDecoration: "none", fontSize: "15px" },
};

export default Navbar;
