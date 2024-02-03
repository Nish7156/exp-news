import { truncateString } from "@/lib/helper";
import React from "react";

function TabContent({ title }: any) {
  return (
    <>
      <div className="featuredContainer">
        <div className="row apple">
          <div className="col-lg-6 col-md-12 mb-30">
            <div className="img-overlay-70 img-scale-animate">
              <img
                src="img/news/news49.jpg"
                alt="news"
                className="img-fluid width-100"
              />
              <div className="mask-content-lg">
                <div className="topic-box-sm color-white mb-20">Apple</div>
                <div className="post-date-light">
                  <ul>
                    <li>
                      <span>by</span>
                      <a href="single-news-1.html">Adams</a>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                      </span>
                      March 22, 2017
                    </li>
                  </ul>
                </div>
                <h2 className="title-medium-light size-lg">
                  <a href="single-news-1.html">{truncateString(title, 45)}</a>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-12">
                <div className="media mb-30">
                  <a
                    className="width38-lg img-opacity-hover"
                    href="single-news-1.html"
                  >
                    <img
                      src="img/news/news87.jpg"
                      alt="news"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <div className="post-date-dark">
                      <ul>
                        <li>
                          <span>
                            <i
                              className="fa fa-calendar"
                              aria-hidden="true"
                            ></i>{" "}
                          </span>
                          February 10, 2017
                        </li>
                      </ul>
                    </div>
                    <h3 className="title-medium-dark size-md mb-none">
                      <a href="single-news-2.html">
                        Blog post look better they are with a featured.
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12">
                <div className="media mb-30">
                  <a
                    className="width38-lg img-opacity-hover"
                    href="single-news-2.html"
                  >
                    <img
                      src="img/news/news88.jpg"
                      alt="news"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <div className="post-date-dark">
                      <ul>
                        <li>
                          <span>
                            <i
                              className="fa fa-calendar"
                              aria-hidden="true"
                            ></i>{" "}
                          </span>
                          June 06, 2017
                        </li>
                      </ul>
                    </div>
                    <h3 className="title-medium-dark size-md mb-none">
                      <a href="single-news-3.html">
                        UAE athlete dies after inden London training.
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12">
                <div className="media mb-30">
                  <a
                    className="width38-lg img-opacity-hover"
                    href="single-news-3.html"
                  >
                    <img
                      src="img/news/news89.jpg"
                      alt="news"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <div className="post-date-dark">
                      <ul>
                        <li>
                          <span>
                            <i
                              className="fa fa-calendar"
                              aria-hidden="true"
                            ></i>{" "}
                          </span>
                          August 22, 2017
                        </li>
                      </ul>
                    </div>
                    <h3 className="title-medium-dark size-md mb-none">
                      <a href="single-news-1.html">
                        Blog post look better they are with a featured.
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12">
                <div className="media mb-30">
                  <a
                    className="width38-lg img-opacity-hover"
                    href="single-news-1.html"
                  >
                    <img
                      src="img/news/news90.jpg"
                      alt="news"
                      className="img-fluid"
                    />
                  </a>
                  <div className="media-body">
                    <div className="post-date-dark">
                      <ul>
                        <li>
                          <span>
                            <i
                              className="fa fa-calendar"
                              aria-hidden="true"
                            ></i>{" "}
                          </span>
                          February 10, 2017
                        </li>
                      </ul>
                    </div>
                    <h3 className="title-medium-dark size-md mb-none">
                      <a href="single-news-2.html">
                        Blog post look better they are with a featured.
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabContent;
