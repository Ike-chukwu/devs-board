import React, { useState } from "react";
import logo from "../../assets/assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const [isSelectTagActive, setSelectTagActive] = useState(false);
  const [isMobileSelectTagActive, setMobileSelectTagActive] = useState(false);
  const [isOverlayFilterActive, setOverlayFilterActive] = useState(false);

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

          <div
            className="filter-parent"
            onClick={() => setSelectTagActive(!isSelectTagActive)}
          >
            <div className="inner-filter-content">
              <i className="fa fa-map-marker"></i>
              <span className="filter-placeholder">filter by location...</span>
            </div>
            {isSelectTagActive && (
              <div className="select-choice">
                <span>filter by location</span>
                <span>filter by location</span>
                <span>filter by location</span>
                <span>filter by location</span>
                <span>filter by location</span>
                <span>filter by location</span>
              </div>
            )}
          </div>

          <div className="job-descp">
            <div className="left-side-descp">
              <input type="checkbox" className="i-checkbox" />
              <p className="category">full time only</p>
            </div>

            <button className="search-btn">search</button>
            <div className="mobile-seach-pack">
              <i
                className="fas fa-filter"
                onClick={() => setOverlayFilterActive(true)}
              ></i>
              <button className="search-btn-icon">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          {isOverlayFilterActive && (
            <div
              className="filter-overlay"
              onClick={() => setOverlayFilterActive(false)}
            >
              <div
                className="white-content"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div
                  className="top-part"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileSelectTagActive(!isMobileSelectTagActive);
                  }}
                >
                  <i className="fa fa-map-marker"></i>
                  <span className="filter-placeholder">
                    filter by location...
                  </span>
                  {isMobileSelectTagActive && (
                    <div className="select-choice">
                      <span>filter by location</span>
                      <span>filter by location</span>
                      <span>filter by location</span>
                      <span>filter by location</span>
                      <span>filter by location</span>
                      <span>filter by location</span>
                    </div>
                  )}
                </div>

                <div className="full-time-filter">
                  <input type="checkbox" className="mobile-checkbox" />
                  <span className="fulltime-title">full time only</span>
                </div>
                <div className="search-btn-container-second">
                  <button className="search-btn-mobile">search</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
