import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn, ThemeBtn } from "../index.js";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow dark:bg-slate-900 dark:text-white">
      <Container>
        <nav className="flex">
          <div className=" flex items-center justify-center mr-2">
            <Link to="/">
              <span className="inline-block ">
                <Logo width="100%" />
              </span>
            </Link>
          </div>
          <ul className="flex ml-auto items-center">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block sm:px-6 px-2 py-2 duration-200 sm:hover:bg-blue-100 sm:dark:hover:bg-indigo-800 rounded-full text-sm sm:text-base"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
            <ThemeBtn />
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
