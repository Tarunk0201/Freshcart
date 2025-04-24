import React from "react";
import Hero1 from "../assets/slide-1.jpeg";
import Hero2 from "../assets/slide-2.jpeg";

export default function Hero() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className=" carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Hero 1 */}
          <div className="carousel-item active" data-bs-interval="10000">
            <div
              className="container my-5"
              style={{
                backgroundImage: `url(${Hero1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
              }}
            >
              <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                  <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                    SuperMarket For Fresh Grocery
                  </h1>
                  <p className="lead">
                    Introduced the new model of online grocery shoping and
                    convenient home delivary.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button
                      type="button"
                      className="btn btn-dark btn-lg px-4 me-md-2 fw-bold"
                    >
                      Shop Now &#8594;
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"></div>
              </div>
            </div>
          </div>
          {/* Hero 2 */}
          <div className="carousel-item" data-bs-interval="2000">
            <div
              className="container my-5"
              style={{
                backgroundImage: `url(${Hero2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
              }}
            >
              <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                  <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                    Free Shipping on Orders Over
                    <span style={{ color: "greenyellow" }}> 400</span>
                  </h1>
                  <p className="lead">
                    Free Shipping for the first-time customers only, After
                    promotions and discounts applied.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button
                      type="button"
                      className="btn btn-dark btn-lg px-4 me-md-2 fw-bold"
                    >
                      Shop Now &#8594;
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
