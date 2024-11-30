import { createContext, useContext, useEffect, useState } from "react";

const GadgetContext = createContext();

export const useGadgets = () => useContext(GadgetContext);

export const GadgetProvider = ({ children }) => {
  const [gadgets, setGadgets] = useState([]);
  const [cart, setCart] = useState([]);
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
    setCart((prevCart) => prevCart.filter((item) => item.product_id !== productId));
  };

  const clearCart = () => setCart([]);

  return (
    <GadgetContext.Provider value={{ gadgets, cart, loading, error, addToCart, removeFromCart, clearCart }}>
      {children}
    </GadgetContext.Provider>
  );
};
