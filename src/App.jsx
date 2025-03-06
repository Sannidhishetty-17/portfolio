import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
