import httpClient from '../http-common';
import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/users/';

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (data) => {
  // return httpClient.post('', data);
  return axios.post(baseUrl,data);
};

const get = (id) => {
  return axios.get(baseUrl + id);
};

const update = (data) => {
  return axios.put(baseUrl, data);
};

const remove = (id) => {
  return axios.delete(baseUrl + `${id}`);
};
export default { getAll, create, get, update, remove };
