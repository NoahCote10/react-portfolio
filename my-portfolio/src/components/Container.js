import React, { useState } from "react";
import Contact from "./Pages/Contact";
import Navigation from "./Header/Navigation";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("Home");
  
    const renderPage = () =>
      currentPage === "Home" ? (
        <Home />
      ) : currentPage === "Contact" ? (
        <Contact />
      ) : currentPage === "Portfolio" ? (
        <Portfolio />
      ) : currentPage === "Resume" ? (
        <Resume />
      ) : null;
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* this is using the current state of the webapge, and also asinging a new state */}
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* this is calling the renderpage function to render our selected page */}
        {renderPage()}
      </div>
    );
  }