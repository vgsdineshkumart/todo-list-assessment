import axios from 'axios';

export const makePromise = httpPromise => {
  return new Promise((resolve, reject) => {
    httpPromise
      .then((res = {}) => {
        // console.log(`HttpClient success:`, res);
        resolve({ ...res.data });
      })
      .catch(error => {
        console.error(`HttpClient failure:`, error);
        reject(error);
      });
  });
};

const httpInterceptor = (accessKey = 'AUTH_KEY') => config => {
  const token = sessionStorage.getItem(accessKey);

  if (typeof config.headers.authorization === 'undefined' && token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
};

class HttpClient {
  constructor(config) {
    this.http = axios.create(config);
    this.http.interceptors.request.use(httpInterceptor());
    // this.http.interceptors.response.use(httpInterceptor('response'));
  }

  get = (...args) => makePromise(this.http.get(...args));
  post = (...args) => makePromise(this.http.post(...args));
  put = (...args) => makePromise(this.http.put(...args));
  delete = (...args) => makePromise(this.http.delete(...args));
  request = (...args) => makePromise(this.http.request(...args));
}

export default new HttpClient();
