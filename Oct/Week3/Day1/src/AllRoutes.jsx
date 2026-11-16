import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import NotFoundPage from "./components/NotFoundPage";
import Company from "./components/Company";
import Employee from "./components/Employee";
import Marketing from "./Marketing.jsx";
import Profile from "./Profile.jsx";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>

        <Route path="/company" element={<Company/>}>
            <Route path="employee" element={<Employee/>}></Route>
            <Route path="marketing" element={<Marketing/>}></Route>
            <Route path="profile/:id" element={<Profile/>}></Route>

        </Route>

        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
