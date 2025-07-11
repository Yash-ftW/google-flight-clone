import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
});

export default api;
