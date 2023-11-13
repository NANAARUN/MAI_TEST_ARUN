import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar.tsx";
import ProjectDetails from "./ProjectDetails.tsx";
import ClarificationBoard from "./ClarificationBoard.tsx";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ProjectDetails />
      <ClarificationBoard />
    </div>
  );
}

export default App;
