import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>Landing page</h1>
      <Link to="/login">login</Link>
    </div>
  );
}

export default Landing;
