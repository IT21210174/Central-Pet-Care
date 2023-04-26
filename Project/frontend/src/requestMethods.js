import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDk0NGViZTBiMjA4Zjk0MTNkNThkNyIsImlhdCI6MTY4MjUyMzM3MiwiZXhwIjoxNjg1MTE1MzcyfQ.CA06Z61OsNsloOaQ0swED_iRku9DTJLD-sh2N2XN1y4'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${token}` }
});