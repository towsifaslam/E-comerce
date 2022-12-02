import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// product Provider
import ProductProvider from "./contexts/ProductContext";
// sidebar provider
import SidebarProvider from "./contexts/SidebarContext";
//cart provider
import { CartContext } from "./contexts/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartContext>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartContext>
  </SidebarProvider>
);
