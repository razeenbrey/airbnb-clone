const API_URL = 'http://localhost:5000/api';
export const SERVER_URL = 'http://localhost:5000';

export const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${SERVER_URL}${path}`;
};

export const getToken = () => localStorage.getItem('token');

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const removeUser = () => {
  localStorage.removeItem('user');
};

export const logout = () => {
  removeToken();
  removeUser();
};

const apiFetch = async (endpoint, options = {}) => {
  const token = getToken();
  const headers = { ...options.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};

export const loginUser = (username, password) => {
  return apiFetch('/users/login', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  });
};

export const getAccommodations = (location) => {
  const query = location ? `?location=${encodeURIComponent(location)}` : '';
  return apiFetch(`/accommodations${query}`);
};

export const getMyAccommodations = () => {
  return apiFetch('/accommodations/mine');
};

export const getAccommodation = (id) => {
  return apiFetch(`/accommodations/${id}`);
};

export const createAccommodation = (formData) => {
  return apiFetch('/accommodations', {
    method: 'POST',
    body: formData
  });
};

export const updateAccommodation = (id, body) => {
  return apiFetch(`/accommodations/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body)
  });
};

export const deleteAccommodation = (id) => {
  return apiFetch(`/accommodations/${id}`, {
    method: 'DELETE'
  });
};

export const createReservation = (body) => {
  return apiFetch('/reservations', {
    method: 'POST',
    body: JSON.stringify(body)
  });
};

export const getHostReservations = () => {
  return apiFetch('/reservations/host');
};

export const getUserReservations = () => {
  return apiFetch('/reservations/user');
};

export const deleteReservation = (id) => {
  return apiFetch(`/reservations/${id}`, {
    method: 'DELETE'
  });
};
