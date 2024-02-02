import React from "react";

function SideMenus({ isMenuOpen, onSideMenuOpenClose }: any) {
  return (
    <>
      <div
        id="offcanvas-body-wrapper"
        className="offcanvas-body-wrapper"
        style={{ right: isMenuOpen ? 0 : "" }}
      >
        <div
          onClick={onSideMenuOpenClose}
          id="offcanvas-nav-close"
          className="offcanvas-nav-close offcanvas-menu-btn"
        >
          <a href="#" className="menu-times re-point">
            <span></span>
            <span></span>
          </a>
        </div>
        <div className="offcanvas-main-body">
          <ul id="accordion" className="offcanvas-nav panel-group">
            <li className="panel panel-default">
              <div className="panel-heading">
                <a
                  aria-expanded="false"
                  className="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                >
                  <i className="fa fa-home" aria-hidden="true"></i>Home Pages
                </a>
              </div>
              <div
                aria-expanded="false"
                id="collapseOne"
                role="tabpanel"
                className="panel-collapse collapse"
              >
                <div className="panel-body">
                  <ul className="offcanvas-sub-nav">
                    <li>
                      <a href="index.html">Home 1</a>
                    </li>
                    <li>
                      <a href="index2.html">Home 2</a>
                    </li>
                    <li>
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
                </div>
              </div>
            </li>
            <li>
              <a href="author-post.html">
                <i className="fa fa-user" aria-hidden="true"></i>Author Post
                Page
              </a>
            </li>
            <li className="panel panel-default">
              <div className="panel-heading">
                <a
                  aria-expanded="false"
                  className="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                >
                  <i className="fa fa-file-text" aria-hidden="true"></i>Post
                  Pages
                </a>
              </div>
              <div
                aria-expanded="false"
                id="collapseTwo"
                role="tabpanel"
                className="panel-collapse collapse"
              >
                <div className="panel-body">
                  <ul className="offcanvas-sub-nav">
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
                  </ul>
                </div>
              </div>
            </li>
            <li className="panel panel-default">
              <div className="panel-heading">
                <a
                  aria-expanded="false"
                  className="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                >
                  <i className="fa fa-info-circle" aria-hidden="true"></i>News
                  Details Pages
                </a>
              </div>
              <div
                aria-expanded="false"
                id="collapseThree"
                role="tabpanel"
                className="panel-collapse collapse"
              >
                <div className="panel-body">
                  <ul className="offcanvas-sub-nav">
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
                </div>
              </div>
            </li>
            <li>
              <a href="archive.html">
                <i className="fa fa-archive" aria-hidden="true"></i>Archive Page
              </a>
            </li>
            <li className="panel panel-default">
              <div className="panel-heading">
                <a
                  aria-expanded="false"
                  className="accordion-toggle collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFour"
                >
                  <i className="fa fa-picture-o" aria-hidden="true"></i>Gallery
                  Pages
                </a>
              </div>
              <div
                aria-expanded="false"
                id="collapseFour"
                role="tabpanel"
                className="panel-collapse collapse"
              >
                <div className="panel-body">
                  <ul className="offcanvas-sub-nav">
                    <li>
                      <a href="gallery-style-1.html">Gallery Style 1</a>
                    </li>
                    <li>
                      <a href="gallery-style-2.html">Gallery Style 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="404.html">
                <i
                  className="fa fa-exclamation-triangle"
                  aria-hidden="true"
                ></i>
                404 Error Page
              </a>
            </li>
            <li>
              <a href="contact.html">
                <i className="fa fa-phone" aria-hidden="true"></i>Contact Page
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideMenus;
