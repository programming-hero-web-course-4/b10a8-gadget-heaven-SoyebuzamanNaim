import React from "react";
import Product from "../Product/Product";

const Products = ({ filteredProducts }) => {
  
  if (filteredProducts.length === 0) {
    return (
      <div className="w-full lg:w-3/4 text-center py-4 bg-purple-500 font-bold">
        <p>No data found</p>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
      {filteredProducts.map((product) => (
        <Product key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default Products;
