import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Solutions from "./components/Solutions";
import SolutionsDesktop from "./components/SolutionsDesktop";
import SolutionsMobile from "./components/SolutionsMobile";

function App() {
  return (
    <Router>
      <Header />
      <Solutions/>
      <SolutionsDesktop />
      <SolutionsMobile />
    </Router>


  );
}

export default App;
