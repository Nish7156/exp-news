import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: any) {
  console.log("::::::");
  
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
