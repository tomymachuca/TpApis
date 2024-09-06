import React from "react";
import ReactDOMClient from "react-dom/client";
import { LandingPageScreen } from "./screens/LandingPageScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<LandingPageScreen />);
