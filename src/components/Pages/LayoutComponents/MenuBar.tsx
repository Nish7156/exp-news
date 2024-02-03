"use client";
import SideMenus from "@/components/Layout/SideMenus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function MenuBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPathChange, setIsPathChange] = useState(false);

  const onSideMenuOpenClose = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScroll = () => {
    const stickerElement = document.getElementById("sticker");
    const headerLayout2 = document.getElementById("header-layout2");

    if (window.innerWidth > 991) {
      let headerHeight = 1;

      if (headerLayout2) {
        headerHeight =
          //@ts-ignore
          headerLayout2?.querySelector(".header-top-bar").offsetHeight;
      }

      const scrollPosition = window.scrollY;

      if (scrollPosition >= headerHeight) {
        if (headerLayout2) {
          //@ts-ignore
          stickerElement.classList.add("stick");
          //@ts-ignore
          document
            .querySelector(".main-menu-area")
            .classList.add("header-menu-fixed");
          //@ts-ignore
          document.body.style.marginTop = stickerElement.offsetHeight + "px";
        }
      } else {
        if (headerLayout2) {
          //@ts-ignore
          stickerElement.classList.remove("stick");
          //@ts-ignore
          document
            //@ts-ignore
            .querySelector(".main-menu-area")
            .classList.remove("header-menu-fixed");
          document.body.style.marginTop = "0";
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
   
  }, [isPathChange])
  

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Post", path: "/categories/post" },
    {
      label: "Pages",
      path: "/#",
      subMenu: [
        "/author-post",
        "/archive",
        "/gallery-style-1",
        "/gallery-style-2",
        "/404",
        "/contact",
      ],
    },
    { label: "Politics", path: "/categories/Politics" },
    { label: "Business", path: "/post-style-2" },
    { label: "Sports", path: "/post-style-3" },
    { label: "Fashion", path: "/post-style-4" },
  ];

  return (
    <>
      <div className={`main-menu-area bg-body border-bottom `} id="sticker">
        <div className="container">
          <div className="bg-primarytextcolor pl-15 pr-15">
            <div className="row no-gutters d-flex align-items-center">
              <div className="col-lg-10 position-static d-none d-lg-block">
                <div className="ne-main-menu">
                  <nav id="dropdown">
                    <ul>
                      {menuItems.map((menuItem, index) => (
                        <li
                          key={index}
                          className={pathname === menuItem.path ? "active" : ""}
                        >
                          <Link style={{textDecoration:"none"}} href={menuItem.path}>{menuItem.label}</Link>
                          {menuItem.subMenu && (
                            <ul className="ne-dropdown-menu">
                              {menuItem.subMenu.map((subMenuItem, subIndex) => (
                                <li
                                  key={subIndex}
                                  className={
                                    pathname === subMenuItem ? "active" : ""
                                  }
                                >
                                  <a href={subMenuItem}>{subMenuItem}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 text-right position-static">
                <div className="header-action-item on-mobile-fixed">
                  <ul>
                    <li>
                      <form
                        id="top-search-form"
                        className="header-search-light"
                      >
                        <input
                          type="text"
                          className="search-input"
                          placeholder="Search...."
                          style={{ display: "none" }}
                        />
                        <button className="search-button">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </form>
                    </li>
                    <li className="d-none d-sm-block d-md-block d-lg-none">
                      <button
                        type="button"
                        className="login-btn"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        <i className="fa fa-user" aria-hidden="true"></i>
                        Sign in
                      </button>
                    </li>
                    <li>
                      <div
                        onClick={onSideMenuOpenClose}
                        id="side-menu-trigger"
                        className="offcanvas-menu-btn offcanvas-btn-repoint"
                      >
                        <a href="#" className="menu-bar">
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                        <a href="#" className="menu-times close">
                          <span></span>
                          <span></span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideMenus
        isMenuOpen={isMenuOpen}
        onSideMenuOpenClose={onSideMenuOpenClose}
      />
    </>
  );
}

export default MenuBar;
