import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
