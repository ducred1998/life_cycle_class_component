import React from "react";
import ReactDOM from "react-dom/client";
import Headers from "./Header.jsx";
import CycleOpediaClassPage from "./CycleOpediaClassPage.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Headers />
    <div className="col-6">
      <span className="h1 text-warning text-center">Class Component</span>
      <CycleOpediaClassPage />
    </div>
  </div>
);
