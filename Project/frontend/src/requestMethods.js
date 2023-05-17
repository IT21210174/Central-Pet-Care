import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";

const token = JSON.parse(localStorage.getItem("user")).token

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${token}` }
});