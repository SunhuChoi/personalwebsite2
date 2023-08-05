import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { ProjectDisplay } from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:id" element={<ProjectDisplay />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
