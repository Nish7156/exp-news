import React, { useEffect, useState } from "react";

function MenuBar({ onSideMenuOpenClose }: any) {
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
                      <li className="active">
                        <a href="#">Home</a>
                        <ul className="ne-dropdown-menu">
                          <li>
                            <a href="index.html">Home 1</a>
                          </li>
                          <li>
                            <a href="index2.html">Home 2</a>
                          </li>
                          <li className="active">
                            <a href="index3.html">Home 3</a>
                          </li>
                          <li>
                            <a href="index4.html">Home 4</a>
                          </li>
                          <li>
                            <a href="index5.html">Home 5</a>
                          </li>
                          <li>
                            <a href="index6.html">Home 6</a>
                          </li>
                          <li>
                            <a href="index7.html">Home 7</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Post</a>
                        <ul className="ne-dropdown-menu">
                          <li>
                            <a href="post-style-1.html">Post Style 1</a>
                          </li>
                          <li>
                            <a href="post-style-2.html">Post Style 2</a>
                          </li>
                          <li>
                            <a href="post-style-3.html">Post Style 3</a>
                          </li>
                          <li>
                            <a href="post-style-4.html">Post Style 4</a>
                          </li>
                          <li>
                            <a href="single-news-1.html">News Details 1</a>
                          </li>
                          <li>
                            <a href="single-news-2.html">News Details 2</a>
                          </li>
                          <li>
                            <a href="single-news-3.html">News Details 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul className="ne-dropdown-menu">
                          <li>
                            <a href="author-post.html">Author Post Page</a>
                          </li>
                          <li>
                            <a href="archive.html">Archive Page</a>
                          </li>
                          <li>
                            <a href="gallery-style-1.html">Gallery Style 1</a>
                          </li>
                          <li>
                            <a href="gallery-style-2.html">Gallery Style 2</a>
                          </li>
                          <li>
                            <a href="404.html">404 Error Page</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Page</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="post-style-1.html">Politics</a>
                      </li>
                      <li>
                        <a href="post-style-2.html">Business</a>
                      </li>
                      <li>
                        <a href="post-style-3.html">Sports</a>
                      </li>
                      <li>
                        <a href="post-style-4.html">Fashion</a>
                      </li>
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
    </>
  );
}

export default MenuBar;
