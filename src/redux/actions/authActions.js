import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/login', userData);
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    axios.defaults.headers.common['Authorization'] = token;
    dispatch(setCurrentUser(jwtDecode(token)));
  } catch (err) {
    console.error(err);
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('https://blog-app-6ubi.onrender.com/api/auth/register', userData);
    dispatch(loginUser(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const setCurrentUser = (decoded) => ({
  type: 'SET_CURRENT_USER',
  payload: decoded,
});

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch(setCurrentUser({}));
};
