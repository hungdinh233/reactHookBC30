//rfc
import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderHome() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="">
          Project Hook
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="">
                Home <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/detail">
                Detail
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login (authorized token)
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/antdemo">
                Antdesign demo
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hook
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/usestate">
                  UseState
                </NavLink>
                <NavLink className="dropdown-item" to="/useeffect">
                  UseEffect
                </NavLink>
                <NavLink className="dropdown-item" to="/usecallback">
                  UseCallback
                </NavLink>
                <NavLink className="dropdown-item" to="/usememodemo">
                  UseMemoDemo
                </NavLink>
                <NavLink className="dropdown-item" to="/userefdemo">
                  UseRefDemo
                </NavLink>
                <NavLink className="dropdown-item" to="/demoredux">
                  Demo Redux (number)
                </NavLink>
                <NavLink className="dropdown-item" to="/fbapp">
                  Facebook App
                </NavLink>
                <NavLink className="dropdown-item" to="/usehookrouter">
                  LoginDemo (UseHookRouter)
                </NavLink>
                <NavLink className="dropdown-item" to="/customhook">
                  UseRoute (customhook)
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
