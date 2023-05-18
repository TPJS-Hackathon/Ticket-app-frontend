import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { TicketContextProvider } from "./Contexts/TicketContext.js";

function App() {
  return (
    <Router>
      <TicketContextProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path ="/dashboard" element={<Dashboard />}/>
            {/* Outras rotas e componentes */}
          </Routes>
        </div>
      </TicketContextProvider>

    </Router>
  );
}

export default App;
