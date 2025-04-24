import React from "react";
import Banner from "../assets/bestSell.jpg";
import PopularProducts from "../data/bestSell";
import { GetStarIcons } from "../data/StarRating.jsx";

export default function BestSells() {
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-12 mb-6">
            <h3 className="mb-4">Daily Best Sells</h3>
          </div>
        </div>
        <div className="table-responsive-lg pb-6">
          <div className="row row-cols-lg-4 row-cols-1 row-cols-md-2 g-4 flex-nowrap">
            <div className="col">
              <div
                className="pt-8 px-6 px-xl-8 rounded"
                style={{
                  background: `url(${Banner}) no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "445px",
                }}
              >
                <div className="text-start p-5">
                  <h3 className="fw-bold text-white">
                    100% Organic Coffee Beans.
                  </h3>
                  <p className="text-white">Get the best deal before close.</p>
                  <a href="#!" className="btn btn-success">
                    Shop Now &#8594;
                    <i className="feather-icon icon-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Products */}
            {PopularProducts.map((product, index) => (
              <div className="col" key={index}>
                <div className="card card-product h-100">
                  <div className="card-body d-flex flex-column">
                    <div className="text-center position-relative mb-3">
                      <div className="position-absolute top-0 start-0">
                        <span className="badge bg-danger">
                          {product.label || "Sale"}
                        </span>
                      </div>
                      <a href="#!">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="img-fluid"
                          style={{ height: "150px", objectFit: "contain" }}
                        />
                      </a>

                      <div className="card-product-action">
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i
                            className="bi bi-eye"
                            data-bs-toggle="tooltip"
                            title="Quick View"
                          ></i>
                        </a>
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          title="Wishlist"
                        >
                          <i className="bi bi-heart"></i>
                        </a>
                        <a
                          href="#!"
                          className="btn-action"
                          data-bs-toggle="tooltip"
                          title="Compare"
                        >
                          <i className="bi bi-arrow-left-right"></i>
                        </a>
                      </div>
                    </div>

                    <div className="text-small mb-1 text-muted">
                      <small>{product.category}</small>
                    </div>
                    <h2 className="fs-6">
                      <a
                        href="#!"
                        className="text-inherit text-decoration-none"
                      >
                        {product.name}
                      </a>
                    </h2>

                    <div className="text-warning small">
                      {GetStarIcons(product.rating)}
                      <span className="text-muted small ms-1">
                        ({product.rating})
                      </span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-dark">₹{product.price}</span>{" "}
                        {product.originalPrice && (
                          <span className="text-decoration-line-through text-muted ms-1">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div>
                        <a href="#!" className="btn btn-success btn-sm">
                          <i className="bi bi-plus-lg"></i> + Add
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-5 text-center">
                    <div
                      className="deals-countdown w-100"
                      data-countdown="2028/10/10 00:00:00"
                    >
                      <span className="countdown-section btn btn-outline-success">
                        <span className="countdown-amount hover-up">1267</span>
                        <span className="countdown-period"> days </span>
                      </span>
                      <span className="countdown-section btn btn-outline-success">
                        <span className="countdown-amount hover-up">12</span>
                        <span className="countdown-period"> hours </span>
                      </span>
                      <span className="countdown-section btn btn-outline-success">
                        <span className="countdown-amount hover-up">57</span>
                        <span className="countdown-period"> mins </span>
                      </span>
                      <span className="countdown-section btn btn-outline-success">
                        <span className="countdown-amount hover-up">47</span>
                        <span className="countdown-period"> sec </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
