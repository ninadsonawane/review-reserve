const axios = require('axios').default;

const API = axios.create({ baseURL : 'http://localhost:8000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;

    }
    return req;
});

export const fetchrvs = () => API.get('/reviews');
export const createrv = (review) => API.post('/reviews' , review);
export const updaterv = (id , updreview) => API.patch(`/reviews/${id}` , updreview);
export const deleterv = (id) => API.delete(`/reviews/${id}`); 
export const likerv = (id) => API.patch(`/reviews/${id}/likerv`);

export const signIn = (formData) => API.post('/user/signin' , formData);
export const signUp = (formData) => API.post('/user/signup' , formData);