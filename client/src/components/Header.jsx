import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1>Header</h1>
      <div id="navBox">
        <nav className="navBar">
          <Link to="/">Home</Link>
          <Link to="/api">Api</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </>
  );
}
