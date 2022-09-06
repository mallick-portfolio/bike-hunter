import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components/index.js";
import { Home } from "./pages/index.js";
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
