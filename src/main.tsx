import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Amplify } from "@aws-amplify/core";
// @ts-ignore
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
