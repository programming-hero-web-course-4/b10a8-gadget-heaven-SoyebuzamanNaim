import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGadgets } from "../../contexts/GadgetProvider";
import ErrorPage from "../ErrorPage/ErrorPage";
import { CiShoppingCart, CiHeart, CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Details = () => {
  const { id } = useParams();
  const { gadgets, cart, wishlist, addToCart, addToWishlist } = useGadgets();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = gadgets.find((g) => g.product_id === id);
    setProduct(foundProduct);
  }, [id, gadgets]);

  if (!product) {
    return <ErrorPage />;
  }

  const handleAddToCart = () => {
    const isProductInCart = cart.some(
      (item) => item.product_id === product.product_id
    );

    if (isProductInCart) {
      alert(`${product.product_title} is already in your cart!`);
    } else {
      addToCart(product);
      alert(`${product.product_title} has been added to your cart!`);
    }
  };

  const handleAddToWishlist = () => {
    const isProductInWishlist = wishlist.some(
      (item) => item.product_id === product.product_id
    );

    if (isProductInWishlist) {
      alert(`${product.product_title} is already in your wishlist!`);
    } else {
      addToWishlist(product);
      alert(`${product.product_title} has been added to your wishlist!`);
    }
  };

  return (
    <>
      <div className="relative mb-28 bg-gradient-to-b from-purple-600 to-gray-200 text-center pb-44 rounded-b-2xl">
        <div>
          <h1 className="text-white container mx-auto text-3xl font-bold pt-8 pb-3">
            Product Details
          </h1>
          <p className="text-lg text-white opacity-80 mb-8 container mx-auto">
            Discover the perfect blend of quality, design, and performance with
            this {product.product_title}, offering exceptional value at an
            unbeatable price.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src={product.product_image}
              alt={product.product_title}
              className="w-full md:w-1/3 rounded-lg object-cover"
            />
            <div className="text-left">
              <h2 className="text-2xl font-bold text-gray-800">
                {product.product_title}
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Price:{" "}
                <span className="font-semibold">
                  ${product.price.toFixed(2)}
                </span>
              </p>
              <span
                className={`mt-2 inline-block px-3 py-1 text-sm rounded-lg ${
                  product.availability
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {product.availability ? "In Stock" : "Out of Stock"}
              </span>
              <p className="mt-4 text-gray-700">{product.description}</p>
              <h3 className="mt-6 text-xl font-semibold">Specifications:</h3>
              <ul className="list-disc pl-5 text-gray-600">
                {product.specification.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
              <div className="flex items-center mt-6">
                <Rating
                  initialRating={product.rating}
                  readonly
                  emptySymbol={<CiStar className="text-gray-400 text-2xl" />}
                  fullSymbol={<FaStar className="text-yellow-500 text-2xl" />}
                />
                <span className="ml-2 text-gray-600 text-lg">
                  {product.rating.toFixed(1)}
                </span>
              </div>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="px-6 py-2 bg-purple-600 text-white rounded-3xl hover:bg-purple-700 flex items-center gap-2"
                >
                  Add to Cart <CiShoppingCart />
                </button>
                <button
                  onClick={handleAddToWishlist}
                  className="p-3 rounded-3xl border border-purple-600 text-purple-600 hover:bg-purple-100 flex items-center gap-2"
                >
                  <CiHeart /> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
