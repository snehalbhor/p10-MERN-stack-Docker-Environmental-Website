import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import UserInteraction from "./UserInteraction/UserInteraction";

import EnvState from "./Context/Env/EnvState";

function App() {
  return (
    <EnvState>
      <div className="main">
        <Router>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/UserInteraction" element={<UserInteraction />} />
          </Routes>
        </Router>
      </div>
    </EnvState>
  );
}

export default App;
