import React from "react";
import Logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({isActive}) =>  isActive ? '"text-white bg-slate-400 px-3 py-2 rounded hover:bg-gray-600"' : 'text-white'
  return (
    <div>
      <nav className="bg-slate-900 border-b border-indigo-500 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between ">
            <div className="flex flex-shrink-0 items-center mr-4 " to="/">
              <img className="h-10 w-auto" src={Logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </div>
            <div className="md:ml-auto">
              <div className="flex space-x-6 list-none">
                <li>
                  <NavLink
                    to="/"
                    className={linkClass}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/jobs" className={linkClass}>
                    Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/add-job" className={linkClass} >
                    Add Jobs
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
