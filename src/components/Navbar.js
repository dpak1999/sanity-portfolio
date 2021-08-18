/** @format */

import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <header className="bg-blue-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-green-300"
            className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-green-300 text-4xl font-bold tracking-widest cursive"
          >
            DEEPAK
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-green-300"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-300"
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="text-green-300"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-300"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-green-300"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-300"
          >
            Projects
          </NavLink>
        </nav>

        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/deepak-kumar-dash-14a293176/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/dpak1999"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/deepak.dash.529/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
