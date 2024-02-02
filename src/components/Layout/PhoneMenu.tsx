"use client";
import React, { useEffect, useState } from "react";
import "../../app/menu.css";

const PhoneMenu = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const menuItems = [
    {
      label: "Home",
      subItems: [
        { label: "Home 1", link: "index.html" },
        { label: "Home 2", link: "index2.html" },
        // Add other home sub-items as needed
      ],
    },
    {
      label: "Post",
      subItems: [
        { label: "Post Style 1", link: "post-style-1.html" },
        { label: "Post Style 2", link: "post-style-2.html" },
        // Add other post sub-items as needed
      ],
    },
    {
      label: "Pages",
      subItems: [
        { label: "Author Post Page", link: "author-post.html" },
        { label: "Archive Page", link: "archive.html" },
        // Add other pages sub-items as needed
      ],
    },
    // Add other top-level menu items as needed
  ];

  useEffect(() => {
    function addClassBasedOnScreenSize() {
      const body = document.body;
      const wrapper: any = document.getElementById("wrapper");

      if (window.innerWidth <= 999) {
        body.classList.add("mean-container");
      } else {
        body.classList.remove("mean-container");
      }
      wrapper.style.overflow = isMenuOpen ? "hidden" : "auto";
    }

    addClassBasedOnScreenSize();

    window.addEventListener("resize", addClassBasedOnScreenSize);

    return () => {
      window.removeEventListener("resize", addClassBasedOnScreenSize);
    };
  }, []);

  const handleMenuClick = (index: any) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="mean-bar">
      <div className="mobile-menu-nav-back">
        <a href="index.html" className="logo-mobile">
          <img src="img/logo.png" alt="Logo" />
        </a>
      </div>
      <a
        href="#nav"
        // className="meanmenu-reveal"
        className="meanmenu-reveal meanclose"
        style={{
          right: "0px",
          left: "auto",
          textAlign: "center",
          textIndent: "0px",
          fontSize: "18px",
        }}
        onClick={() => setisMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <p>x</p>
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </a>
      <nav className="mean-nav">
        <ul style={{ display: isMenuOpen ? "block" : "none", height: "729px" }}>
          {menuItems.map((menuItem, index) => (
            <li key={index} onClick={() => handleMenuClick(index)}>
              <a href="#">{menuItem.label}</a>
              {menuItem.subItems && menuItem.subItems.length > 0 && (
                <ul
                  className="ne-dropdown-menu"
                  style={{
                    display: openSubmenuIndex === index ? "block" : "none",
                  }}
                >
                  {menuItem.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href={subItem.link}>{subItem.label}</a>
                    </li>
                  ))}
                </ul>
              )}
              <a className="mean-expand" href="#" style={{ fontSize: "18px" }}>
                +
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PhoneMenu;
