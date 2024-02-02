import React from "react";
import Seo, { SeoProps } from "../Seo/index";

interface IProps extends SeoProps {
  children: React.ReactNode;
}

const PageBase: React.FC<IProps> = (props) => {
  return (
    <>
      <Seo {...props} />
      <main>{props.children}</main>
    </>
  );
};

export default PageBase;
