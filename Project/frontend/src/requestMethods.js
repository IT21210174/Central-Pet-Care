import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3OTA2NDhiOWY3MDBmZDQxNjY3MSIsImlhdCI6MTY4NDA3MzUzMSwiZXhwIjoxNjg2NjY1NTMxfQ.oFX1dth27CpwmJPzlF_GkOO7k3a8WSjWzUwRHdO4FX8'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${token}` }
});