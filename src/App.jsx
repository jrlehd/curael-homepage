import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./AppContent";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <AppContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Router>
    </div>
  );
}

export default App;
