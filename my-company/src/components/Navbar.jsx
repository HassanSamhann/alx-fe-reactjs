import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div style={{display: "flex", }}>
        <Link to="/">
          logo
        </Link>
        <ul>
        <li><Link to="about"> about </Link></li>
        <li><Link to="contact"> Contact </Link></li>
        <li><Link to="Services"> Services </Link></li>

        </ul>

      </div>
    </>
  )
}

export default Navbar ; 