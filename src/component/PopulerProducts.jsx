import React from "react";
import PopularProducts from "../data/PopularProducts";
import ProductCard from "../component/ProductCard.jsx";

export default function PopularGrid({ setSelectedProduct }) {
  return (
    <>
      <div className="container my-4 ">
        <h2 className="mb-4">Popular Products</h2>
        <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3 mygrid">
          {PopularProducts.map((product, index) => (
            <div className="col" key={index}>
              <ProductCard
                product={product}
                onQuickView={() => setSelectedProduct(product)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
