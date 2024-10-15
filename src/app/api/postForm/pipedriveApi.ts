import axios from "axios";

export const baseURL = process.env.BASE_URL || "";

export const formApi = axios.create({
  baseURL: process.env.BASE_URL,
});
