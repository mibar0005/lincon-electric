import "./App.css";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Solutions from "./components/pages/Solutions";
import SolutionsDesktop from "./components/pages/SolutionsDesktop";
import SolutionsMobile from "./components/pages/SolutionsMobile";
function App() {
  return (
    <Router>
      <Header />
      <Solutions/>
      {/* <SolutionsDesktop /> */}
      <SolutionsMobile />
      <Routes>
        {/* <Route path="/" element={<p>HOme Page</p>} /> */}
        {/* <Route path="*" element={<p>no page at this route</p>} /> */}

      </Routes>
      {/* <Dropdown /> */}
    </Router>


  );
}

export default App;
