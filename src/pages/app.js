import React from "react";
import { Link } from "@reach/router";
import { Link as GatsbyLink } from "gatsby";
import { Router } from "@reach/router";

export default function AppPage() {
  return (
    <Router basepath={__PATH_PREFIX__}>
      <App path="/app" />
      <Contact path="/app/contact" />
    </Router>
  );
}

function App() {
  return (
    <>
      <h3>App</h3>
      <Link to="contact">Contact</Link> <GatsbyLink to="/">Home</GatsbyLink>
    </>
  );
}

function Contact() {
  return (
    <>
      <h3>App Contact</h3>
      <Link to="..">App</Link> <GatsbyLink to="/">Home</GatsbyLink>
    </>
  );
}
