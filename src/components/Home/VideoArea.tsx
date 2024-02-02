import React from "react";

function VideoArea() {
  return (
    <>
      <section className="bg-secondary-body section-space-less30">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="topic-border color-cinnabar mb-30">
                <div className="topic-box-lg color-cinnabar">Watch Videos</div>
              </div>
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="img-overlay-90 mb-30">
                    <div className="text-center">
                      <a
                        className="play-btn popup-youtube"
                        href="http://www.youtube.com/watch?v=1iIZeIy7TqM"
                      >
                        <img
                          src="img/banner/play.png"
                          alt="play"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <img
                      src="img/news/news105.jpg"
                      alt="news"
                      className="img-fluid width-100"
                    />
                    <div className="mask-content-lg hidden-mb">
                      <div className="topic-box-sm color-white mb-20">
                        Technology
                      </div>
                      <div className="post-date-light">
                        <ul>
                          <li>
                            <span>by</span>
                            <a href="single-news-1.html">Jacob</a>
                          </li>
                          <li>
                            <span>
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                            </span>
                            May 27, 2017
                          </li>
                        </ul>
                      </div>
                      <h2 className="title-medium-light size-lg">
                        <a href="single-news-1.html">
                          Fitness area coverded they Governed this inCan't shed
                          those Gym?
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="media mb-30">
                    <a
                      className="img-opacity-hover width26-lg"
                      href="single-news-1.html"
                    >
                      <img
                        src="img/news/news106.jpg"
                        alt="news"
                        className="img-fluid"
                      />
                    </a>
                    <div className="media-body">
                      <div className="topic-box-sm color-white mb-20">
                        Application
                      </div>
                      <h3 className="title-medium-light mb-none">
                        <a href="single-news-2.html">
                          Patricia Urquiola transparent area furney Italia with
                          iridescent
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="media mb-30">
                    <a
                      className="img-opacity-hover width26-lg"
                      href="single-news-1.html"
                    >
                      <img
                        src="img/news/news107.jpg"
                        alt="news"
                        className="img-fluid"
                      />
                    </a>
                    <div className="media-body">
                      <div className="topic-box-sm color-white mb-20">
                        Gadgets
                      </div>
                      <h3 className="title-medium-light mb-none">
                        <a href="single-news-2.html">
                          Patricia Urquiola transparent area furney Italia with
                          iridescent
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="media mb-30">
                    <a
                      className="img-opacity-hover width26-lg"
                      href="single-news-1.html"
                    >
                      <img
                        src="img/news/news108.jpg"
                        alt="news"
                        className="img-fluid"
                      />
                    </a>
                    <div className="media-body">
                      <div className="topic-box-sm color-white mb-20">
                        Android
                      </div>
                      <h3 className="title-medium-light mb-none">
                        <a href="single-news-2.html">
                          Patricia Urquiola transparent area furney Italia with
                          iridescent
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoArea;
