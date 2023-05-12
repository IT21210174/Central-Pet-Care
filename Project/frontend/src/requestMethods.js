import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3YTE0NDhiOWY3MDBmZDQxNjY3OCIsImlhdCI6MTY4Mzc5NTIwNiwiZXhwIjoxNjg2Mzg3MjA2fQ.UQqUgE1WLwpK3aS6IqT9kpx_vNzva5lFJvVMlGS-4Kg'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${token}` }
});