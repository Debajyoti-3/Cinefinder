import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from './components/Home/Home.jsx'
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
