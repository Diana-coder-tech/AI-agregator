import axios from axios;

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_API_BASE,
    headers: {
        "Content-type": "application/json"
    }
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headres['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response && error.response.status === 401) {
            if (window.location.pathname !== '/src/views/Auth/Login') {
                logout();
            }
        }
        return Promise.reject(error);
    }
);
function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('internalError');
    window.location.href='/src/views/Auth/Login';
}

export default instance;
