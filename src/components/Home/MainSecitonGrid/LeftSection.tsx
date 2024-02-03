"use client";
import React, { useState } from "react";
import MainHeadLines from "./MainHeadLines";
import TabContent from "./TabContent";
import Link from "next/link";

function LeftSection() {
  const tabData = [
    {
      id: "apple",
      label: "Apple",
      component: (
        <TabContent
          title="newsAPPLE
    byAdamsMarch 22, 2017
    Government Launches Are Inquiry Into Taintedgsrgbsrb"
        />
      ),
    },
    { id: "fashion", label: "Fashion", component: <TabContent title="Hiii" /> },
    // Add more tab data as needed
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const handleTabClick = (tabId: React.SetStateAction<string>) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="col-lg-8 col-md-12">
        <div className="mb-20-r ne-isotope">
          <div className="topic-border color-azure-radiance mb-30">
            <div className="topic-box-lg color-azure-radiance">What’s New</div>
            <div className="isotope-classNamees-tab isotop-btn">
              {tabData.map((tab) => (
                <div
                  key={tab.id}
                  data-filter={`.${tab.id}`}
                  className={activeTab === tab.id ? "current" : ""}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </div>
              ))}
            </div>
            <div className="more-info-link">
              <Link href={`/categories?${"test1"}`}>
                More
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="featuredContainer">
            {tabData.map((tab) => (
              <div key={tab.id}>{activeTab === tab.id && tab.component}</div>
            ))}
          </div>
        </div>
        <div className="row">
          <MainHeadLines />
        </div>
      </div>
    </>
  );
}

export default LeftSection;
