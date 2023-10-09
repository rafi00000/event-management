import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);

  const navLinks = (
    <ul className="menu menu-horizontal px-1 flex gap-4 font-semibold">
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "h-full text-cyan-500 font-bold underline"
            : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "h-full text-cyan-500 font-bold underline"
            : ""
        }
      >
        About Us
      </NavLink>
      <NavLink
        to={"/contactus"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "h-full text-cyan-500 font-bold underline"
            : ""
        }
      >
        Contact
      </NavLink>
      <NavLink
        to={"/login"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "h-full text-cyan-500 font-bold underline"
            : ""
        }
      >
        Login
      </NavLink>
    </ul>
  );

  return (
    <div className="navbar bg-orange-600 lg:text-white rounded-lg mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">{navLinks}</div>

      <div className="navbar-end">
        {user ? (
          <div className="flex gap-1 items-center">
            <div className="flex p-2 rounded-lg outline items-center gap-2">
              <img
                src={user.photoURL || "user.png"}
                className="rounded-full w-8"
              />
              <p>{user.displayName || "User"}</p>
            </div>

            <button
              className="text-black"
              onClick={() => {
                signOutUser()
                  .then((data) => console.log(data))
                  .catch((err) => console.log(err));
              }}
            >
              Sign out
            </button>
          </div>
        ) : (
          <button
            className="btn btn-sm bg-orange-500 text-white"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
