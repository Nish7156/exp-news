import BreadCrumbArea from "@/components/Utility/BreadCrumbArea";

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  
  return (
    <>
    <BreadCrumbArea/>
      <section className="bg-body section-space-less30">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 mb-30">
              <div className="news-details-layout1">
                <div className="position-relative mb-30">
                  <img
                    src="img/news/news177.jpg"
                    alt="news-details"
                    className="img-fluid"
                  />
                  <div className="topic-box-top-sm">
                    <div className="topic-box-sm color-cinnabar mb-20">
                      Business
                    </div>
                  </div>
                </div>
                <h2 className="title-semibold-dark size-c30">
                  10 Hdrenaline fuelled activities that will chase the post
                  summer blues away
                </h2>
                <ul className="post-info-dark mb-30">
                  <li>
                    <a href="#">
                      {" "}
                      <span>By</span> Mark Willy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-calendar" aria-hidden="true"></i>Jan
                      10, 2017
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-eye" aria-hidden="true"></i>202
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-comments" aria-hidden="true"></i>20
                    </a>
                  </li>
                </ul>
                <p>
                  Nmply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's andard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  andser crambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining.
                </p>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distrib ution of letters, as opposed to using 'Content
                  here, content here', making it look like readabl aree English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum s their default model text, and a search.
                </p>
                <img
                  src="img/news/news178.jpg"
                  alt="news-details"
                  className="img-fluid pull-left mr-40 mb-15"
                />
                <p>
                  Nmply dummy text of the printing and typesetting ustry. Lorem
                  Ipsum has been the industry's stydedy andard dummy text ever
                  since the, when new wwan printer took a galley of type
                  andsercrambled it toit make a type specimen book. It has
                  survived anneyt only five centuries, but also theleap into
                  electro nic typesetting, remaining.
                </p>
                <p>
                  It is a long established fact that a reader will be dist
                  racted by the readable content of a page when looking at its
                  layout.
                </p>
                <blockquote cite="#" className="bg-accent mt-50 mb-50">
                  Srem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s. Lorem Ipsum is
                  simply .
                </blockquote>
                <p>
                  Nmply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's st andard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  andse aerr crambled it to make a type specimen book. It has
                  survived not only five centuries, but also they area leap into
                  electronic typesetting, remaining.
                </p>
                <ul className="blog-tags item-inline">
                  <li>Tags</li>
                  <li>
                    <a href="#">#Business</a>
                  </li>
                  <li>
                    <a href="#">#Magazine</a>
                  </li>
                  <li>
                    <a href="#">#Lifestyle</a>
                  </li>
                </ul>
                <div className="post-share-area mb-40 item-shadow-1">
                  <p>You can share this post!</p>
                  <ul className="social-default item-inline">
                    <li>
                      <a href="#" className="facebook">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="google">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="pinterest">
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rss">
                        <i className="fa fa-rss" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="linkedin">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="row no-gutters divider blog-post-slider">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <a href="#" className="prev-article">
                      {" "}
                      <i className="fa fa-angle-left" aria-hidden="true"></i>
                      Previous article
                    </a>
                    <h3 className="title-medium-dark pr-50">
                      Wonderful Outdoors Experience: Eagle Spotting in Alaska
                    </h3>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-right">
                    <a href="#" className="next-article">
                      Next article
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                    <h3 className="title-medium-dark pl-50">
                      The only thing that overcomes hard luck is hard work
                    </h3>
                  </div>
                </div>
                <div className="author-info p-35-r mb-50 border-all">
                  <div className="media media-none-xs">
                    <img
                      src="img/author.jpg"
                      alt="author"
                      className="img-fluid rounded-circle"
                    />
                    <div className="media-body pt-10 media-margin30">
                      <h3 className="size-lg mb-5">Mark Willy</h3>
                      <div className="post-by mb-5">By Admin</div>
                      <p className="mb-15">
                        Dorem Ipsum is simply dummy text of the printing and
                        typesetting industr been the industry's standard dummy
                        text ever since.
                      </p>
                      <ul className="author-social-style2 item-inline">
                        <li>
                          <a href="#" title="facebook">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="twitter">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="google-plus">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="linkedin">
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="pinterest">
                            <i
                              className="fa fa-pinterest"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="comments-area">
                  <h2 className="title-semibold-dark size-xl border-bottom mb-40 pb-20">
                    03 Comments
                  </h2>
                  <ul>
                    <li>
                      <div className="media media-none-xs">
                        <img
                          src="img/blog1.jpg"
                          className="img-fluid rounded-circle"
                          alt="comments"
                        />
                        <div className="media-body comments-content media-margin30">
                          <h3 className="title-semibold-dark">
                            <a href="#">
                              Nitiya ,<span> August 29, 2017</span>
                            </a>
                          </h3>
                          <p>
                            Borem Ipsum is simply dummy text of the printing and
                            typesetting industry Lorem Ipsum has been the
                            industry's standard dummy text.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media media-none-xs">
                        <img
                          src="img/blog2.jpg"
                          className="img-fluid rounded-circle"
                          alt="comments"
                        />
                        <div className="media-body comments-content media-margin30">
                          <h3 className="title-semibold-dark">
                            <a href="#">
                              Fahim ,<span> August 29, 2017</span>
                            </a>
                          </h3>
                          <p>
                            Borem Ipsum is simply dummy text of the printing and
                            typesetting industry Lorem Ipsum has been the
                            industry's standard dummy text.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="leave-comments">
                  <h2 className="title-semibold-dark size-xl mb-40">
                    Leave Comments
                  </h2>
                  <form id="leave-comments">
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            placeholder="Name*"
                            className="form-control"
                            type="text"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            placeholder="Email*"
                            className="form-control"
                            type="email"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <div className="form-group">
                          <input
                            placeholder="Web Address"
                            className="form-control"
                            type="text"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            placeholder="Message*"
                            className="textarea form-control"
                            id="form-message"
                            // rows="8"
                            // cols="20"
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb-none">
                          <button type="submit" className="btn-ftg-ptp-45">
                            Post Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="ne-sidebar sidebar-break-md col-lg-4 col-md-12">
              <div className="sidebar-box">
                <div className="topic-border color-cod-gray mb-30">
                  <div className="topic-box-lg color-cod-gray">
                    Stay Connected
                  </div>
                </div>
                <ul className="stay-connected overflow-hidden">
                  <li className="facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <div className="connection-quantity">50.2 k</div>
                    <p>Fans</p>
                  </li>
                  <li className="twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <div className="connection-quantity">10.3 k</div>
                    <p>Followers</p>
                  </li>
                  <li className="linkedin">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                    <div className="connection-quantity">25.4 k</div>
                    <p>Fans</p>
                  </li>
                  <li className="rss">
                    <i className="fa fa-rss" aria-hidden="true"></i>
                    <div className="connection-quantity">20.8 k</div>
                    <p>Subscriber</p>
                  </li>
                </ul>
              </div>
              <div className="sidebar-box">
                <div className="ne-banner-layout1 text-center">
                  <a href="#">
                    <img
                      src="img/banner/banner3.jpg"
                      alt="ad"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="sidebar-box">
                <div className="topic-border color-cod-gray mb-5">
                  <div className="topic-box-lg color-cod-gray">Recent News</div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-4 col-sm-6 col-6">
                    <div className="mt-25 position-relative">
                      <div className="topic-box-top-xs">
                        <div className="topic-box-sm color-cod-gray mb-20">
                          Nature
                        </div>
                      </div>
                      <a
                        href="single-news-1.html"
                        className="mb-10 display-block img-opacity-hover"
                      >
                        <img
                          src="img/news/news171.jpg"
                          alt="ad"
                          className="img-fluid m-auto width-100"
                        />
                      </a>
                      <h3 className="title-medium-dark size-md mb-none">
                        <a href="single-news-1.html">
                          Rosie Huntington Whitl Habits Career Art.Rosie TBeauty
                          Habits.
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-4 col-sm-6 col-6">
                    <div className="mt-25 position-relative">
                      <div className="topic-box-top-xs">
                        <div className="topic-box-sm color-cod-gray mb-20">
                          Application
                        </div>
                      </div>
                      <a
                        href="single-news-1.html"
                        className="mb-10 display-block img-opacity-hover"
                      >
                        <img
                          src="img/news/news172.jpg"
                          alt="ad"
                          className="img-fluid m-auto width-100"
                        />
                      </a>
                      <h3 className="title-medium-dark size-md mb-none">
                        <a href="single-news-1.html">
                          Rosie Huntington Whitl Habits Career Art.Rosie TBeauty
                          Habits.
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-4 col-sm-6 col-6">
                    <div className="mt-25 position-relative">
                      <div className="topic-box-top-xs">
                        <div className="topic-box-sm color-cod-gray mb-20">
                          Life Style
                        </div>
                      </div>
                      <a
                        href="single-news-1.html"
                        className="mb-10 display-block img-opacity-hover"
                      >
                        <img
                          src="img/news/news173.jpg"
                          alt="ad"
                          className="img-fluid m-auto width-100"
                        />
                      </a>
                      <h3 className="title-medium-dark size-md mb-none">
                        <a href="single-news-1.html">
                          Rosie Huntington Whitl Habits Career Art.Rosie TBeauty
                          Habits.
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-4 col-sm-6 col-6">
                    <div className="mt-25 position-relative">
                      <div className="topic-box-top-xs">
                        <div className="topic-box-sm color-cod-gray mb-20">
                          Technology
                        </div>
                      </div>
                      <a
                        href="single-news-1.html"
                        className="mb-10 display-block img-opacity-hover"
                      >
                        <img
                          src="img/news/news174.jpg"
                          alt="ad"
                          className="img-fluid m-auto width-100"
                        />
                      </a>
                      <h3 className="title-medium-dark size-md mb-none">
                        <a href="single-news-1.html">
                          Rosie Huntington Whitl Habits Career Art.Rosie TBeauty
                          Habits.
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-4 col-sm-6 col-6">
                    <div className="mt-25 position-relative">
                      <div className="topic-box-top-xs">
                        <div className="topic-box-sm color-cod-gray mb-20">
                          Accessories
                        </div>
                      </div>
                      <a
                        href="single-news-1.html"
                        className="mb-10 display-block img-opacity-hover"
                      >
                        <img
                          src="img/news/news175.jpg"
                          alt="ad"
                          className="img-fluid m-auto width-100"
                        />
                      </a>
                      <h3 className="title-medium-dark size-md mb-none">
                        <a href="single-news-1.html">
                          Rosie Huntington Whitl Habits Career Art.Rosie TBeauty
                          Habits.
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-4 col-sm-6 col-6">
                    <div className="mt-25 position-relative">
                      <div className="topic-box-top-xs">
                        <div className="topic-box-sm color-cod-gray mb-20">
                          Model
                        </div>
                      </div>
                      <a
                        href="single-news-1.html"
                        className="mb-10 display-block img-opacity-hover"
                      >
                        <img
                          src="img/news/news176.jpg"
                          alt="ad"
                          className="img-fluid m-auto width-100"
                        />
                      </a>
                      <h3 className="title-medium-dark size-md mb-none">
                        <a href="single-news-1.html">
                          Rosie Huntington Whitl Habits Career Art.Rosie TBeauty
                          Habits.
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-box">
                <div className="topic-border color-cod-gray mb-30">
                  <div className="topic-box-lg color-cod-gray">Newsletter</div>
                </div>
                <div className="newsletter-area bg-primary">
                  <h2 className="title-medium-light size-xl pl-30 pr-30">
                    Subscribe to our mailing list to get the new updates!
                  </h2>
                  <img
                    src="img/banner/newsletter.png"
                    alt="newsletter"
                    className="img-fluid m-auto mb-15"
                  />
                  <p>Subscribe our newsletter to stay updated</p>
                  <div className="input-group stylish-input-group">
                    <input
                      type="text"
                      placeholder="Enter your mail"
                      className="form-control"
                    />
                    <span className="input-group-addon">
                      <button type="submit">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="sidebar-box">
                <div className="topic-border color-cod-gray mb-25">
                  <div className="topic-box-lg color-cod-gray">Tags</div>
                </div>
                <ul className="sidebar-tags">
                  <li>
                    <a href="#">Apple</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Architecture</a>
                  </li>
                  <li>
                    <a href="#">Gadgets</a>
                  </li>
                  <li>
                    <a href="#">Software</a>
                  </li>
                  <li>
                    <a href="#">Microsoft</a>
                  </li>
                  <li>
                    <a href="#">Robotic</a>
                  </li>
                  <li>
                    <a href="#">Technology</a>
                  </li>
                  <li>
                    <a href="#">Others</a>
                  </li>
                </ul>
              </div>
              <div className="sidebar-box">
                <div className="topic-border color-cod-gray mb-30">
                  <div className="topic-box-lg color-cod-gray">
                    Most Reviews
                  </div>
                </div>
                <div className="position-relative mb30-list bg-body">
                  <div className="topic-box-top-xs">
                    <div className="topic-box-sm color-cod-gray mb-20">
                      Apple
                    </div>
                  </div>
                  <div className="media">
                    <a className="img-opacity-hover" href="single-news-1.html">
                      <img
                        src="img/news/news117.jpg"
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
                              ></i>
                            </span>
                            February 10, 2017
                          </li>
                        </ul>
                      </div>
                      <h3 className="title-medium-dark mb-none">
                        <a href="single-news-2.html">
                          Can Be Monit roade year with Program.
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="position-relative mb30-list bg-body">
                  <div className="topic-box-top-xs">
                    <div className="topic-box-sm color-cod-gray mb-20">
                      Gadgets
                    </div>
                  </div>
                  <div className="media">
                    <a className="img-opacity-hover" href="single-news-2.html">
                      <img
                        src="img/news/news118.jpg"
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
                              ></i>
                            </span>
                            June 06, 2017
                          </li>
                        </ul>
                      </div>
                      <h3 className="title-medium-dark mb-none">
                        <a href="single-news-3.html">
                          Can Be Monit roade year with Program.
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="position-relative mb30-list bg-body">
                  <div className="topic-box-top-xs">
                    <div className="topic-box-sm color-cod-gray mb-20">
                      Software
                    </div>
                  </div>
                  <div className="media">
                    <a className="img-opacity-hover" href="single-news-3.html">
                      <img
                        src="img/news/news119.jpg"
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
                              ></i>
                            </span>
                            August 22, 2017
                          </li>
                        </ul>
                      </div>
                      <h3 className="title-medium-dark mb-none">
                        <a href="single-news-1.html">
                          Can Be Monit roade year with Program.
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="position-relative mb30-list bg-body">
                  <div className="topic-box-top-xs">
                    <div className="topic-box-sm color-cod-gray mb-20">
                      Tech
                    </div>
                  </div>
                  <div className="media">
                    <a className="img-opacity-hover" href="single-news-1.html">
                      <img
                        src="img/news/news120.jpg"
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
                              ></i>
                            </span>
                            February 10, 2017
                          </li>
                        </ul>
                      </div>
                      <h3 className="title-medium-dark mb-none">
                        <a href="single-news-2.html">
                          Can Be Monit roade year with Program.
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="position-relative mb30-list bg-body">
                  <div className="topic-box-top-xs">
                    <div className="topic-box-sm color-cod-gray mb-20">
                      Ipad
                    </div>
                  </div>
                  <div className="media">
                    <a className="img-opacity-hover" href="single-news-1.html">
                      <img
                        src="img/news/news121.jpg"
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
                              ></i>
                            </span>
                            February 10, 2017
                          </li>
                        </ul>
                      </div>
                      <h3 className="title-medium-dark mb-none">
                        <a href="single-news-2.html">
                          Can Be Monit roade year with Program.
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
