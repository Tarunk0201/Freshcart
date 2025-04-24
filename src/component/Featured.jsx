import React from "react";
import "../styles/Navbar.css";
import Items from "../data/Items";
import Image1 from "../assets/featur-1.png";
import Image2 from "../assets/featur-2.jpeg";

export default function Featured() {
  // Break items into chunks of 4
  const chunkItems = (arr, size) =>
    arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);

  const itemChunks = chunkItems(Items, 4); // 4 items per slide

  return (
    <>
      <div className="container my-5 mb-4">
        <div
          id="featuredCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <h2 className="mb-4">Featured Products</h2>
          <div className="carousel-inner">
            {itemChunks.map((chunk, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="row">
                  {chunk.map((item) => (
                    <div className="col-md-3" key={item.id}>
                      <div className="card h-100">
                        <img
                          src={item.image}
                          className="card-img-top mb-3 mx-auto d-block item-imag"
                          alt={item.name}
                        />
                        <div className="card-body  text-center">
                          <h5 className="card-title ">{item.name}</h5>
                          <p className="card-text ">{item.offer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel controls */}

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#featuredCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#featuredCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* 2nd container */}

      <div className="container mb-0">
        <div className="row">
          <div className="col-12 col-md-6 mb-3 mb-lg-0">
            <div
              className="py-5 px-4 rounded"
              style={{
                background: `url(${Image1}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="fw-bold mb-1">Fruits & Vegetables</h3>
              <p className="mb-4">
                Get Upto <span className="fw-bold">30%</span> Off
              </p>
              <a href="#!" className="btn btn-dark">
                Shop Now
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div
              className="py-5 px-4 rounded"
              style={{
                background: `url(${Image2}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="fw-bold mb-1">Freshly Baked Buns</h3>
              <p className="mb-4">
                Get Upto <span className="fw-bold">25%</span> Off
              </p>
              <a href="#!" className="btn btn-dark">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
