import axios from "axios";
import "dotenv/config";

const token = process.env.TBX_ECHO_SERVER_TOKEN;
const baseURL = process.env.TBX_ECHO_SERVER_URL;

const client = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default client;
