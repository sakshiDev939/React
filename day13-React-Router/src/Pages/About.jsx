import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router";

const About = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>This is about page</h1>
      <button onClick={() => navigate('/about/nested')}>Nested ko dikhao</button>
      <Outlet />
    </div>
  );
};

export default About;