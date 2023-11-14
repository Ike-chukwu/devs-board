import React from "react";
import logo from "../../assets/assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {


  
  return (
    <div className="nav-parent">
      <div className="navmenu-wrapper">
        <div className="navbar-menu">
          <span className="logoName">devjobs</span>
          <div className="right">
            <i className="fas fa-sun"></i>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <i className="fas fa-moon"></i>
          </div>
        </div>
        <div className="overlapping-nav">
          <div className="search-input-parent">
            <div className="search-input">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Filter by title, companies,expertise"
                className="input-field-search"
              />
            </div>
          </div>

          <div className="filter-parent">
            <div className="inner-filter-content">
              <i className="fa fa-map-marker"></i>
              <span className="filter-placeholder">filter by location...</span>
            </div>
            <select name="" id="" className="select-choice">
              <option value="">filter by location</option>
            </select>
          </div>

          <div className="job-descp">
            <div className="left-side-descp">
              <input type="checkbox" className="i-checkbox" />
              <p className="category">full time only</p>
            </div>

            <button className="search-btn">search</button>
            <div className="mobile-seach-pack">
              <i className="fas fa-filter"></i>
              <button className="search-btn-icon">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
