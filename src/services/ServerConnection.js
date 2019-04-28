import axios from 'axios';
// import config from '../config/config';

let instance = axios.create({
  headers: {
    'content-type': 'application/json'
  },
  timeout: 30000
});

export const serverConnectGet = (url) => {

  return instance.get(url);
};