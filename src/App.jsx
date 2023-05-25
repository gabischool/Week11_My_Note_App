import React from "react";
// Import all your components here
// Soo Jiido wixii components ah ood u baahantahay

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateNote from "./components/UpdateNote";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update-note/:NoteId" element={<UpdateNote />} />
      </Routes>
    </Router>
  );
}

export default App;
