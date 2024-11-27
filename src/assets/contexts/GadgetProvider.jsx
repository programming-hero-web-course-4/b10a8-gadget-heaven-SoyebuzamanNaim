import { createContext, useContext, useEffect, useState } from "react";

const GadgetContext = createContext();

export const useGadgets = () => {
  return useContext(GadgetContext);
};

export const GadgetProvider = ({ children }) => {
  const [gadgets, setGadgets] = useState([]);
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

  return (
    <GadgetContext.Provider value={{ gadgets, loading, error }}>
      {children}
    </GadgetContext.Provider>
  );
};
