import React, { useState, useEffect } from "react";
import { useGadgets } from "../../contexts/GadgetProvider";
import { TbSortAscending } from "react-icons/tb";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import success_img from "../../images/Group.png";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useGadgets();
  const [sortedCart, setSortedCart] = useState(cart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setSortedCart(cart);
  }, [cart]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const sortCartByPrice = () => {
    const sorted = [...cart].sort((a, b) => b.price - a.price);
    setSortedCart(sorted);
  };

  const handlePurchase = () => {
    setIsModalOpen(true);
   
  };

  const handleCloseModal = () => {
    clearCart();
    setIsModalOpen(false);
    navigate("/"); 
  };

  return (
    <div>
      <div className="flex items-center justify-between py-10 container mx-auto px-4">
        <h2 className="font-bold text-xl mb-3">Cart</h2>
        <div className="flex items-center text-xl font-bold gap-3">
          Total cost: <span className="font-bold">${calculateTotal()}</span>
          <button
            onClick={sortCartByPrice}
            className="flex items-center gap-1 btn rounded-3xl border-purple-500 bg-white text-purple-500"
          >
            Sort by Price <TbSortAscending />
          </button>
          <button
            className={`btn rounded-3xl bg-purple-500 text-white hover:bg-purple-600 `}
            onClick={handlePurchase}
            disabled={cart.length === 0 || calculateTotal() === "0.00"}
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="bg-gray-100 py-8 rounded-lg">
        {sortedCart.length === 0 ? (
          <p className="text-2xl font-bold text-center">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-4 container mx-auto">
            {sortedCart.map((item) => (
              <div
                key={item.product_id}
                className="bg-white shadow-sm rounded-lg p-4 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-20 rounded-lg"
                  />
                  <div>
                    <h1 className="text-lg font-bold">{item.product_title}</h1>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="text-purple-500 font-bold">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.product_id)}
                  className="text-3xl px-4 py-2 text-red-500 rounded-full"
                  
                >
                  <TiDeleteOutline />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col gap-3 justify-center items-center bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="">
            <img src={success_img}  />
            </div>
            <h2 className="text-2xl font-bold text-black border-b py-2 border-gray-300">
              Payment Successfully
            </h2>
            <p className="text-lg mb-4 ">
              Thanks for purchasing. <br /> Total cost: {calculateTotal()} $
            </p>
            <button
              onClick={handleCloseModal}
              className="px-6 py-2 w-full bg-gray-300 text-black font-bold rounded-3xl hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
