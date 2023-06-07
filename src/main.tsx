import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FavContextProvider } from "./context/FavContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <FavContextProvider>
        <App />
      </FavContextProvider>
    </ShoppingCartProvider>
  </React.StrictMode>
);
