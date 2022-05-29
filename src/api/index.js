import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchStudents = () => API.get(`/ad/students`);
export const checkFace = () => API.get(`/check-face`);
export const postFace = () => API.get(`/post-face`);

export const signInAd = (formData) => API.post('/ad/signin', formData);
export const signUpAd = (formData) => API.post('/ad/signup', formData);

export const signInStud = (formData) => API.post('/st/signin', formData);
export const signUpStud = (formData) => API.post('/st/signup', formData);