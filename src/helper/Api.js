import axios from "axios";
import { API_URL } from "./constants";

// Create basic api route
const Axios = axios.create({
  baseURL: API_URL,
});

// To call the get function of axios
export const getRequest = async (url) => {
  try {
    const response = await Axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
    throw e.response.data;
  }
};
