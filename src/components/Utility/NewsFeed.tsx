import React from "react";

function NewsFeed() {
  return (
    <>
      <section className="bg-body">
        <div className="container">
          <div className="row no-gutters d-flex align-items-center">
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="topic-box mt-4 mb-5">Top Stories</div>
            </div>
            <div className="col-lg-10 col-md-9 col-sm-8 col-6">
              <div className="feeding-text-dark2">
                <ol id="sample" className="ticker">
                  <li>
                    <a href="#">
                      McDonell Kanye West highlights difficulties for
                      celebritiesComplimentary decor and design advicewith
                      Summit Park homes
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Magnificent Image Of The New Hoover Dam Bridge Taking
                      Shape
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      If Obama Had Governed Like This in 2017 He'd Be the
                      Transformational.
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsFeed;
