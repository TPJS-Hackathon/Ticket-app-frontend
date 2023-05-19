import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { TicketContextProvider } from "./Contexts/TicketContext.js";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateTicket from "./components/Create_ticket/create_ticket.jsx"

function App() {
  return (
    <Router>
      <TicketContextProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/new_ticket" element={<CreateTicket />} />
          </Routes>
          <Footer />
        </div>
      </TicketContextProvider>
    </Router>
  );
}

export default App;

