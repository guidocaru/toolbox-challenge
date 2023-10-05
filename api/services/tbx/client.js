import axios from "axios";

const token = "aSuperSecretKey"
const baseUrl = "https://echo-serv.tbxnet.com/v1"

const client = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default client;
