import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
