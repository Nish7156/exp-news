import React from "react";
import LeftSection from "./LeftSection";
import RightSectionSideBar from "./RightSectionSideBar";
import AdBannerHorizontal from "@/components/Utility/AdBannerHorizontal";

function MainSecitonGrid() {
  return (
    <>
      <section className="bg-body section-space-default">
        <div className="container">
          <div className="row">
            <LeftSection />
            <RightSectionSideBar />
          </div>
          <AdBannerHorizontal />
        </div>
      </section>
    </>
  );
}

export default MainSecitonGrid;
