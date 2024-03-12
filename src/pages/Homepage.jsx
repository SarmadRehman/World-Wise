import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>homepage</h1>
      <AppNav />
      <Link to="/pricing">Pricing</Link>
      <h1>App</h1>
      <Link to="/app">Go to app</Link>
    </div>
  );
}

export default Homepage;
