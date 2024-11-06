import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ claim }) => {
  return (
    <div className="flex justify-between items-center container mx-auto">
    
    <div className="navbar bg-base-100  pt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <img src="./assets/logo.png" alt="" />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
        </ul>
      </div>






    </div>

        <div className="w-60">
          <button className="btn min-w-48 bg-white">
            {claim} Coin{" "}
            <img
              className="w-6"
              src="https://img.icons8.com/?size=100&id=sPBQkuep9vDA&format=png&color=000000"
              alt=""
            />
          </button>
        </div>

    </div>
  );
};

Navbar.propTypes = {
  optionalFunc: PropTypes.func,
};

export default Navbar;
