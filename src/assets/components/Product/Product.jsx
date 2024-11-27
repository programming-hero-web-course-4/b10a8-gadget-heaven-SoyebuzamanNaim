import React from "react";

const Product = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl flex flex-col h-full">
      <img
        src={product.product_image}
        alt={product.product_title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="font-semibold text-lg text-gray-800">
          {product.product_title}
        </h3>
        <p className="text-sm text-gray-600 grow">{product.description}</p>
        <p className="mt-2 text-purple-600 font-bold">{product.price}$</p>

        <button class="btn btn-outline hover:bg-purple-600 hover:text-white hover:border-purple-950 text-purple-600 border-2 border-purple-600">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Product;