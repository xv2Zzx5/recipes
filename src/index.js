import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
import { DataContextProvider } from "./context/DataContext";
const PUBLISHABLE_KEY =
  "pk_test_cmVsYXRlZC1sZW9wYXJkLTQwLmNsZXJrLmFjY291bnRzLmRldiQ";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ClerkProvider afterSignOutUrl="/" publishableKey={PUBLISHABLE_KEY}>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </ClerkProvider>
);
