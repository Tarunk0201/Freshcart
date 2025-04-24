import React, { useState } from "react";
import { useCart } from "../data/CartContext";
import { GetStarIcons } from "../data/StarRating";

function ProductModal({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("250g");

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    alert("Added to cart!");
  };

  if (!product) return null;

  return (
    <div
      className="modal fade"
      id="quickViewModal"
      tabIndex="-1"
      aria-labelledby="quickViewModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body row p-4">
            {/* Left Section: Images */}
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded mb-3"
              />

              {/* Thumbnail gallery */}
              <div className="d-flex gap-2">
                {[...Array(4)].map((_, idx) => (
                  <img
                    key={idx}
                    src={product.image}
                    alt={`thumb-${idx}`}
                    className="img-thumbnail"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      border:
                        idx === 0 ? "2px solid green" : "1px solid #dee2e6",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right Section: Info */}
            <div className="col-md-6">
              <small className="text-success">Bakery Biscuits</small>
              <h4 className="fw-bold mt-1">{product.name}</h4>

              {/* Rating and Price */}
              <div className="mb-2">
                {GetStarIcons(product.rating)}
                <span className="text-warning me-2">({product.rating})</span>
              </div>

              <h5 className="fw-bold">
                ${product.price}{" "}
                <del className="text-muted">${product.originalPrice}</del>{" "}
                <span className="text-danger">26% Off</span>
              </h5>

              {/* Sizes */}
              <div className="my-3">
                {["250g", "500g", "1kg"].map((size, idx) => (
                  <button
                    key={idx}
                    className={`btn btn-sm me-2 ${
                      selectedSize === size
                        ? "btn-dark"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Quantity + Add to Cart */}
              <div className="d-flex align-items-center my-3">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="mx-2">{quantity}</span>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>

                <button
                  className="btn btn-success ms-3"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>

              {/* Product Details */}
              <ul className="list-unstyled mt-4 small">
                <li>
                  <strong>Product Code:</strong> FBB00255
                </li>
                <li>
                  <strong>Availability:</strong> In Stock
                </li>
                <li>
                  <strong>Type:</strong> Fruits
                </li>
                <li>
                  <strong>Shipping:</strong> 01 day shipping.{" "}
                  <span className="text-success">(Free pickup today)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
