import React from "react";

function BreadCrumbArea() {
  return (
    <section
      className="breadcrumbs-area"
      style={{ backgroundImage: "url('img/banner/breadcrumbs-banner.jpg')" }}
    >
      <div className="container">
        <div className="breadcrumbs-content">
          <h1>Post Style_2</h1>
          <ul>
            <li>
              <a href="index.html">Home</a> -
            </li>
            <li>All Posts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BreadCrumbArea;
