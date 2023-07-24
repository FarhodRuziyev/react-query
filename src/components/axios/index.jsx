import axios from "axios";

export const instance = axios.create({
  // baseURL: 'https://some-domain.com/api/',
  baseURL: "https://reqres.in/",
  timeout: 10000,
  // headers: {'X-Custom-Header': 'foobar'}
});