import React from "react";
import Icon1 from "../assets/clock.png";
import Icon2 from "../assets/gift.png";
import Icon3 from "../assets/box.png";
import Icon4 from "../assets/recycle.png";

export default function Footer() {
  return (
    <>
      <div className="container px-4 py-5" id="icon-grid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col ">
            <svg
              className="mb-4 p-4 bi text-body-secondary flex-shrink-0 me-3"
              style={{
                background: `url(${Icon1}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              width="1.75em"
              height="1.75em"
              aria-hidden="true"
            >
              <use xlink:href="#cpu-fill"></use>
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis herotext">
                10 minuts grocery now
              </h3>
              <p className="heropera">
                Get your order delivered to your doorstep at the earliest from
                FreshCart pickup stores near you.
              </p>
            </div>
          </div>
          <div className="col ">
            <svg
              className="mb-4 p-4 bi text-body-secondary flex-shrink-0 me-3"
              style={{
                background: `url(${Icon2}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              width="1.75em"
              height="1.75em"
              aria-hidden="true"
            >
              <use xlink:href="#bootstrap"></use>
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis herotext">
                Best Price and Offers
              </h3>
              <p className="heropera">
                Cheapest price than your local supermarket, great cashback
                offers to top it off. get best pricess & offers.
              </p>
            </div>
          </div>
          <div className="col ">
            <svg
              className="mb-4 p-4 bi text-body-secondary flex-shrink-0 me-3"
              style={{
                background: `url(${Icon3}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              width="1.75em"
              height="1.75em"
              aria-hidden="true"
            >
              <use xlink:href="#calendar3"></use>
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis herotext">
                Wide Assortment
              </h3>
              <p className="heropera">
                Choose from 5000+ products across food, personal care,
                household, bakery, veg and non-veg & other categories.
              </p>
            </div>
          </div>
          <div className="col ">
            <svg
              className="mb-4 p-4 "
              style={{
                background: `url(${Icon4}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              width="1.75em"
              height="1.75em"
              aria-hidden="true"
            >
              <use xlink:href="#home"></use>
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis herotext">
                Easy returns
              </h3>
              <p className="heropera">
                Not satisfied with product? return it at thr doorstep & get a
                refund within hours. No questions asked policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
