import React, { useState, useEffect } from "react";
import { useGadgets } from "../../contexts/GadgetProvider";
import Sidebar from "../Sidebar/Sidebar";
import Products from "../Products/Products";

const Gadgets = () => {
  const { gadgets, loading } = useGadgets();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(gadgets);
  }, [gadgets]);

  const handleCategorySelect = (category) => {
    if (category === "All Product") {
      setFilteredProducts(gadgets);
    } else {
      const filtered = gadgets.filter((gadget) => gadget.category === category);
      setFilteredProducts(filtered);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span class="loading loading-spinner loading-lg "></span>
      </div>
    );
  }

  const categories = [];
  const seen = {};
  for (let i = 0; i < gadgets.length; i++) {
    const category = gadgets[i].category;
    if (!seen[category]) {
      categories.push(category);
      seen[category] = true;
    }
  }

  return (
    <div>
      <p className="text-3xl font-extrabold text-center pb-10">Explore Cutting-Edge Gadgets</p>
      <div className="flex gap-6">
        <Sidebar
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />
        <Products filteredProducts={filteredProducts} />
      </div>
    </div>
  );
};

export default Gadgets;
