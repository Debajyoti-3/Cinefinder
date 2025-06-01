import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import "./index.css";
import About from '../src/components/About/About.jsx'
import Contact from '../src/components/Contact/Contact.jsx'
import Results from "./components/Results/Results.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { SearchProvider } from "./context/SearchContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: " ",
        element: <Home/>
      },
      {
        path: "/About",
        element: <About/>
      },
      {
        path: "/Contact",
        element: <Contact/>
      },
      {
        path: "/Results",
        element: <Results/>
      }
    ]

  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
      <RouterProvider router={router}/>
    </SearchProvider>
  </StrictMode>
);
