import { AxiosError } from "axios";
import axios from "axios";
import cookies from 'js-cookie'
import { useNavigate } from '@tanstack/react-router'
import { useAuth } from "../hooks/useAuth";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  async (config) => {
    const accessToken = cookies.get('challenge-sre-globo-web-access-token');
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response, async (error : AxiosError) => {
    if (error.response && error.response.status === 401) {
      const { signOut } = useAuth()
        const navigate = useNavigate()
        signOut();
        navigate({to: '/auth/sign-in'})
    } else {
      return Promise.reject(error);
    }
  },
);

export default api;