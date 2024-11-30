import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const GadgetContext = createContext();

export const useGadgets = () => useContext(GadgetContext);

export const GadgetProvider = ({ children }) => {
  const [gadgets, setGadgets] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/gadgetHeaven.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setGadgets(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product_id !== productId)
    );
    toast.warning(`Product removed from cart`);
  };

  const clearCart = () => setCart([]);

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.product_id === product.product_id)) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.product_id !== productId)
    );
    toast.warning(`Product removed from Wishlist`);
  };

  const moveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.product_id);
    toast.success(`Product moved to Cart successfully`);
  };

  return (
    <GadgetContext.Provider
      value={{
        gadgets,
        cart,
        wishlist,
        loading,
        error,
        addToCart,
        removeFromCart,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        moveToCart,
      }}
    >
      {children}
    </GadgetContext.Provider>
  );
};
