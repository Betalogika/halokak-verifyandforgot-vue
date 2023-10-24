import axios from "axios";

const resource = axios.create({
  baseURL: import.meta.env.VITE_VUE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default resource;
