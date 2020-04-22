import React from "react";
import { Link } from "gatsby";

export default function IndexPage({ location }) {
  return (
    <>
      <h1>Home</h1>
      <Link to="/app">App</Link>
    </>
  );
}
