import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { fetchData } from "./Common";

const Header = () => {
  const location = useLocation();
  const curPath = location.pathname;

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchQry = async () => {

    if(!query){
      alert('Enter value to search...')
      return;
    }

    const getData = await fetchData(`https://dummyjson.com/recipes/search?q=${query}`);
    const recipeData = await getData.recipes;

    if(recipeData.length === 0){
      alert('No data found...');
      return;
    }

    navigate(`/recipes/${query}`);

  };

  const NavTabs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Recipes",
      href: `/recipes/Indian`,
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="fa-solid fa-cookie-bite me-1"></i>
            <span className="text-warning">Bite</span>Book
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileNavBar"
            aria-controls="mobileNavBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mobileNavBar">
            <div className="navbar-nav ms-auto">
              {NavTabs.map((nav, index) => {
                return (
                  <a
                    key={index}
                    className={`nav-link mx-0 mx-md-2 px-3 px-md-4 ${
                      nav.href == curPath ? "active" : ""
                    }`}
                    href={nav.href}
                  >
                    {nav.label}
                  </a>
                );
              })}
            </div>

            <div className="navbar-nav ms-auto">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={(e)=>{setQuery(e.target.value)}}
              />
              <button
                className="btn btn-warning px-4 mt-2 mt-md-0 btn-sm d-flex justify-content-center align-items-center"
                type="button" onClick={searchQry} 
              >
                <i className="fa-solid fa-search me-2"></i> Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
