import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ResumeParser from "./components/ResumeParser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResumeParser />} />
      </Routes>
    </Router>
  );
}

export default App;
