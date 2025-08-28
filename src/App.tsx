import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ResumeParser from "./components/ResumeParser";
import Kalpesh from "./components/Kalpesh";
import Adwiteeya from "./components/Adwiteeya";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResumeParser />} />
        <Route path="/resume/kalpesh" element={<Kalpesh />} />
        <Route path="/resume/adwiteeya" element={<Adwiteeya />} />
      </Routes>
    </Router>
  );
}

export default App;
