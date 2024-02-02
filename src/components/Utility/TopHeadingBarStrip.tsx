import { getUserLocation } from "@/lib/helper";
import React, { useEffect, useState } from "react";

function TopHeadingBarStrip() {
  const [userLocation, setUserLocation] = useState<any>("");
  const currentDate = new Date();
  const options:any = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);


  useEffect(() => {
    getUserLocation()
      .then((location: any) => {
        setUserLocation(location);
      })
      .catch((error) => {
        console.error("Error getting user location:", error);
      });
  }, []);
  console.log(userLocation, "userLocation");

  return (
    <>
      <div className="top-bar-top bg-primarytextcolor ">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <ul className="news-info-list text-center--md">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  {userLocation?.country || "India"}
                </li>
                <li>
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  <span id="current_date">{formattedDate}</span>
                </li>
                <li>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>Last
                  Update 11.30 am
                </li>
                <li>
                  <i className="fa fa-cloud" aria-hidden="true"></i>
                  {userLocation?.city || ""}
                </li>
              </ul>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <ul className="header-social">
                <li>
                  <a href="#" title="facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="google-plus">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="linkedin">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="pinterest">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="rss">
                    <i className="fa fa-rss" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="vimeo">
                    <i className="fa fa-vimeo" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeadingBarStrip;
