import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/hero";
import Featured from "./component/Featured";
import PopulerProducts from "./component/PopulerProducts";
import Footer from "./component/footer";
import BestSells from "./component/BestSells";
import Footer1 from "./component/Footer1";
import { useState } from "react";
import ProductModal from "./component/ProductModal";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <PopulerProducts setSelectedProduct={setSelectedProduct} />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <BestSells />
      <Footer />
      <Footer1 />
    </>
  );
}

export default App;
