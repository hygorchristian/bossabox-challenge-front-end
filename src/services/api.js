import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000
});

export const listTools = params => {
  return api.get("/tools", { params });
};

export const createTool = data => {
  return api.post("/tools", data);
};

export const deleteTool = id => {
  return api.delete(`/tools/${id}`);
};
