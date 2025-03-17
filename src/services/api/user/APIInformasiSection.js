// src/services/api.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/user/informasi";

export const getInformasi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/data`);
    return response.data.informasi;
  } catch (error) {
    console.error("Error fetching informasi: ", error);
    throw error;
  }
};
