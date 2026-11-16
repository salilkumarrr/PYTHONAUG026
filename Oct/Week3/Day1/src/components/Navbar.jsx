import React from "react";
import { Link } from "react-router";

function Navbar() {
return (
<nav style={{ display: "flex", gap: "20px", padding: "15px" }}>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/service">Service</Link>
<Link to="/company">Company</Link>
<Link to="/company/employee">Employee</Link>
<Link to="/company/marketing?user=Active&theme=Dark">Marketing</Link>
<Link to="/company/profile/101">Profile</Link>
</nav>
);
}

export default Navbar;