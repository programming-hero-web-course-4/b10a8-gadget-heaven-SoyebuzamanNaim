import { useGadgets } from "../../contexts/GadgetProvider";
import { TbSortAscending } from "react-icons/tb";
import { useState, useEffect } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useGadgets();
  const [sortedCart, setSortedCart] = useState(cart);

  useEffect(() => {
    setSortedCart(cart);
  }, [cart]);

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return total;
  };

  const sortCartByPrice = () => {
    const sorted = [...cart].sort((a, b) => b.price - a.price);
    setSortedCart(sorted);
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
            className="btn rounded-3xl bg-purple-500 text-white hover:bg-purple-600"
            onClick={clearCart}
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
    </div>
  );
};

export default Cart;
