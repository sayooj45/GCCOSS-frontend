import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [partners, setPartners] = useState([]);

  const fetchPartners = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/partners/getAll`, {});
      setPartners(res.data);
      console.log("partners", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  return (
    <DataContext.Provider value={{ partners }}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
