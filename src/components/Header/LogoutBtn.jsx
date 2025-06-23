import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../features/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-block px-3 mx-2 py-2 duration-200 hover:bg-blue-100 dark:hover:bg-indigo-500 rounded-full dark:bg-indigo-800 sm:text-base text-xs"
      onClick={logoutHandler}
    >
      Log out
    </button>
  );
}

export default LogoutBtn;
