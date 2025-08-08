import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";
import Santorini from "./pages/Santorini.jsx";

function Root() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    // scroll to top on route change to mimic page navigation
    window.scrollTo(0, 0);
  }, [route]);

  // Simple routes
  if (route.startsWith("#/pages/santorini")) {
    return (
      <HelmetProvider>
        <Santorini />
      </HelmetProvider>
    );
  }
  return (
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
