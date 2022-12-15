import React from "react";
import { Link, Outlet, useLocation, useHistory } from "react-router-dom";

function Pricing() {
  // useLocation provides the current path
  //   const location = useLocation();
  //   console.log(location);
  //   const { pathname } = useLocation();
  //   console.log(pathname);

  return (
    <div>
      {/* outlet let the parent knows where to render the child  */}
      <Outlet />
      Show Pricing
      <nav style={{}}>
        {/* Anuj bhaiya told  to use the uselocation to use in better */}
        {/* <Link to={`${location.pathname}/free`}>free</Link> */}
        {/* or */}
        {/* <Link to={`${pathname}/free`} style={{ marginInline: `1rem` }}>
          free
        </Link>
        <Link to={`${pathname}/premium`} style={{ marginInline: `1rem` }}>
          premium
        </Link>
        <Link to={`${pathname}/freemium`}>freemium</Link> */}
      </nav>
      {/* free pricing or premium pricing , asper to the route will get into outlet  */}
      <Outlet />
    </div>
  );
}

export default Pricing;
