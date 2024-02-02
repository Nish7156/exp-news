import React from "react";

function LogoWithAds() {
  return (
    <>
      <div className="top-bar-bottom bg-body pt-20 pb-20 d-none d-lg-block">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-4">
              <div className="logo-area">
                <a href="index.html" className="img-fluid">
                  <img src="img/logo-dark.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="ne-banner-layout1 pull-right">
                <a href="#">
                  <img
                    src="img/banner/banner2.jpg"
                    alt="ad"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoWithAds;
