import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul style={{ listStyle: `none` }}>
        <li>
          <button>
            <Link to="/pricing">Pricing</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/about">About</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
