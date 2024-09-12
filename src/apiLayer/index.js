import axios from "axios";
import { toast } from "react-toastify";

export const baseUrl = "https://fakestoreapi.com/";

export const apiCallInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

export const fetchProducts = async () => {
  try {
    const response = await apiCallInstance.get("products");
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginFunction = async (data) => {
  try {
    const response = await apiCallInstance.post("accounts/auth/login", data);

    // toast.success("Login Successfully.");
    return response.data;
  } catch (error) {
    console.log(error, "Login api ko erros");
    toast.error(error?.response?.data);
  }
};
export const signupFunction = async (data) => {
  try {
    const response = await apiCallInstance.post("user", data);

    // toast.success("Login Successfully.");
    return response.data;
  } catch (error) {
    console.log(error, "Login api ko erros");
    toast.error(error?.response?.data);
  }
};
export const AddActivitiesFunction = async (data) => {
  try {
    const response = await apiCallInstance.post("activityManagement", data);

    // toast.success("Login Successfully.");
    return response.data;
  } catch (error) {
    console.log(error, "Login api ko erros");
    toast.error(error?.response?.data);
  }
};

// Api layer
