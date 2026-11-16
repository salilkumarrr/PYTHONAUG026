import React from "react";
import { Outlet } from "react-router";

function Company() {
return (
<div>
<h1>Company Page</h1>
<Outlet />
</div>
);
}

export default Company;