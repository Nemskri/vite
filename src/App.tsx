import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ResumeParser from "./components/ResumeParser";
import Kalpesh from "./components/Kalpesh";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResumeParser />} />
        <Route path="resume" element={<Kalpesh />} />
      </Routes>
    </Router>
  );
}

export default App;
