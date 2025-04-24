import React from "react";
import { GetStarIcons } from "../data/StarRating.jsx";
import { useCart } from "../data/CartContext";

function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert("Added to cart!");
  };

  if (!product) return null;

  return (
    <>
      <div className="card">
        <div className="card card-product h-100 ">
          <div className="card-body d-flex flex-column">
            <div className="text-center position-relative mb-3">
              <div className="position-absolute top-0 start-0">
                <span className="badge bg-danger">
                  {product.label || "Sale"}
                </span>
              </div>
              <a href="#!">
                <i className="bi bi-eye"></i>
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
              <a href="#!" className="text-inherit text-decoration-none">
                {product.name}
              </a>
            </h2>

            <div className="text-warning small">
              {GetStarIcons(product.rating)}
              <span className="text-muted small ms-1">({product.rating})</span>
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
                <a
                  href="#!"
                  className="btn btn-success btn-sm"
                  onClick={handleAddToCart}
                >
                  <i className="bi bi-plus-lg"></i> + Add
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          className="btn btn-sm btn-outline-success"
          data-bs-toggle="modal"
          data-bs-target="#quickViewModal"
          onClick={onQuickView}
        >
          <i className="fa-regular fa-eye px-2"></i>Quick View
        </button>
      </div>
    </>
  );
}

export default ProductCard;
