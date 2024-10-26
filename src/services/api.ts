import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Cambia la URL según tu configuración

export const registerUser = async (email: string, password: string, role: string) => {
  const response = await axios.post(`${API_URL}/register`, { email, password, role });
  return response.data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const forgotPassword = async (email: string) => {
  const response = await axios.post(`${API_URL}/forgot-password`, { email });
  return response.data;
};
