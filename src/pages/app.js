import React from "react";
import { Link } from "@reach/router";
import { Router } from "@reach/router";

export default function AppPage() {
  return (
    <Router>
      <App path="/app" />
      <Contact path="/app/contact" />
    </Router>
  );
}

function App() {
  return (
    <>
      <h3>App</h3>
      <Link to="contact">Contact</Link> <Link to="/">Home</Link>
    </>
  );
}

function Contact() {
  return (
    <>
      <h3>App Contact</h3>
      <Link to="..">App</Link> <Link to="/">Home</Link>
    </>
  );
}
