import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import History from "./pages/History/History";
import Settings from "./pages/Settings/Settings";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
