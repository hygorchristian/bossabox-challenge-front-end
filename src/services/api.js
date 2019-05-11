import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 10000
});

export const listTools = () => {
  return api.get('/tools', data);
};

export const createTool = data => {
  return api.post('/tools', data);
};

export const createTool = id => {
  return api.delete(`/tools/${id}`);
};
