import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Outras rotas e componentes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
