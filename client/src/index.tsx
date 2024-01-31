import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // Strict mode renders components twice (on dev but not production)
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
