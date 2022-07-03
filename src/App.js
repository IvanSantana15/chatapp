import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<div>chat App</div>} />
          <Route path="/iniciar seccion" element={<Login/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
