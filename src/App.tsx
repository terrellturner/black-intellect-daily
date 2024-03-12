import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main/Main.tsx";
import Footer from "./Footer/Footer.tsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
    <Footer />
  </React.StrictMode>
);
