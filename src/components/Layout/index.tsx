'use client'
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideMenus from "./SideMenus";

function Layout({ children }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onSideMenuOpenClose = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Header onSideMenuOpenClose={onSideMenuOpenClose} />
      {children}
      <Footer />
      <SideMenus isMenuOpen={isMenuOpen} onSideMenuOpenClose={onSideMenuOpenClose} />
    </>
  );
}

export default Layout;
