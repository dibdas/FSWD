import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul
        style={{
          listStyle: `none`,
          display: `flex`,
          justifyContent: `space-between`,
        }}
      >
        <li>
          <button>
            <Link to="/pricing">Pricing</Link>
          </button>
        </li>
        <li>
          <button>
            <Link
              to="/about"
              state={{
                from: "occupation ",
                luckyNumber: `2345`,
                anykey: `loginkey`,
              }}
            >
              About
            </Link>
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
