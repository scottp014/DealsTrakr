"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { fetchUser, signout } from "../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Router from "router";

const Navbar = () => {
  // if signed it show log out if logged out show sign in

  const dispatch = useDispatch();
  const router = useRouter();
  
  const handleSignOut = () => {
    dispatch(signout());
    router.push("/");
  }

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const authenticated = useSelector((state) => state.auth.authenticated);
  const email = useSelector((state) => state.auth.email);

  const renderLinks = () => {
    if (authenticated) {
      return (
        <div className="d-flex justify-content-between ">
          <div className="nav-email">{email}</div>
          <span
            className="navbar-nav nav-item"
            onClick={handleSignOut}
          >
            sign out
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="navbar-nav nav-item"  href="/">
            <span>Sign in</span>
          </Link>
        </div>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="d-flex justify-content-between container-fluid ">
        <div className="navbar-brand">
          <span className="">DealsTrakr</span>
        </div>
        {renderLinks()}
      </div>
    </nav>
  );
};

export default Navbar;
