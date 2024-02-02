import React from "react";
import TopHeadingBarStrip from "../Utility/TopHeadingBarStrip";
import LogoWithAds from "../Pages/LayoutComponents/LogoWithAds";
import MenuBar from "../Pages/LayoutComponents/MenuBar";

function Header({onSideMenuOpenClose}:any) {
  return (
    <>
      <header>
        <div id="header-layout2" className="header-style3">
          <div className="header-top-bar">
            <TopHeadingBarStrip />
           <LogoWithAds/>
          </div> 
          <MenuBar onSideMenuOpenClose={onSideMenuOpenClose}/>       
        </div>
      </header>
    </>
  );
}

export default Header;
