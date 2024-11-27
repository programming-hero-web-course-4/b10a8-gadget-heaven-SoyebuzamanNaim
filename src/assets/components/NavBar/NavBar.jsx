import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isDashboard = location.pathname === "/dashboard";
  const isCart = location.pathname === "/dashboard/cart";
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg text-center  ${
              isActive
                ? "text-white font-extrabold btn btn-ghost underline bg-purple-500"
                : "text-gray-700"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            `text-lg text-center  ${
              isActive
                ? "text-purple-500 font-extrabold btn btn-ghost underline"
                : isHomePage
                ? "text-white"
                : "text-gray-700"
            }`
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="statistics"
          className={({ isActive }) =>
            `text-lg text-center  ${
              isActive
                ? "text-purple-500 font-extrabold btn btn-ghost underline"
                : isHomePage
                ? "text-white"
                : "text-gray-700"
            }`
          }
        >
          Statistics
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`md:mt-4 md:mx-4 ${
        isHomePage ? "bg-purple-500  md:rounded-t-xl" : "bg-white"
      }`}
    >
      <div className="navbar  container mx-auto">
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
              className={`menu menu-sm dropdown-content  ${
                isHomePage ? "bg-purple-400" : "bg-gray-100"
              } rounded-box z-[1] mt-3 w-52 p-2 shadow`}
            >
              {links}
            </ul>
          </div>
          <h1
            className={`p-4 font-extrabold text-2xl ${
              isHomePage ? "text-white" : "text-gray-700"
            }`}
          >
            Gadget Heaven
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu flex-row items-center">{links}</ul>
        </div>
        <div className="navbar-end space-x-2">
          <NavLink
            to="dashboard/cart"
            className={({ isActive }) =>
              `btn rounded-full text-xl ${
                isActive || isDashboard || isCart
                  ? "text-purple-900 border-2 font-extrabold  border-purple-500"
                  : " border-gray-300"
              }`
            }
          >
            <CiShoppingCart />
          </NavLink>
          <NavLink
            to="dashboard/wishlist"
            className={({ isActive }) =>
              `btn rounded-full text-xl ${
                isActive
                  ? "text-purple-900 border-2 font-extrabold  border-purple-500"
                  : " border-gray-300"
              }`
            }
          >
            <CiHeart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
