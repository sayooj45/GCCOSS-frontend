import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [partners, setPartners] = useState([]);
  const [events, setEvents] = useState([]);
  const [publications, setPublications] = useState([]);

  const fetchPartners = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/partners/getAll`, {});
      setPartners(res.data);
      console.log("partners", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/events/getAll`, {});
      setEvents(res.data);
      console.log("Events", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPublications = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/publications/getAll`, {});
      setPublications(res.data);
      console.log("publications", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPartners();
    fetchEvents();
    fetchPublications();
  }, []);

  useEffect(() => {
    fetchPartners();
  }, []);

  return (
    <DataContext.Provider value={{ partners, events, publications, API_URL }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
