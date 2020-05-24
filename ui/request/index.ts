import axios, {AxiosRequestConfig} from 'axios';
import {AxiosObservable, Response} from './request.interface';
import {createObservable} from './createObservable';

const instance = axios.create({
  baseURL: process.env.HOST,
  timeout: 1000,
  headers: {}
});


instance.interceptors.request.use(config => {
  const extraParams = { time: new Date().getTime() };
  const { data, method } = config;
  console.log('config.headers', config.headers)
  const isFormData =
    config.headers["Content-Type"] &&
    config.headers["Content-Type"].indexOf("multipart/form-data") !== -1;
  if (method === "get") {
    config.headers["Content-Type"] = "application/json";
    config.params = Object.assign({}, data, extraParams);
  } else {
    config.headers["Accept"] = "application/json";
    config.params = extraParams;
  }
  const { params } = config;
  // if (data && !isFormData) {
  //   const { time } = params;
  //   params.sign = crypto(JSON.stringify(data) + time);
  // } else if (params) {
  //   config.params.sign = crypto(params, true);
  // }
  return config;
});


instance.interceptors.response.use((res: Response) : Response => {
  return res;
}, function (error) {
  const {data} = error.response;
  return {
    error: true,
    message: data.message
  };
});


export default class Request {

  static get<T = any>(url: string, config?: AxiosRequestConfig): AxiosObservable<T> {
    return createObservable<T>(instance.get, url, config);
  }

  static post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosObservable<T> {
    return createObservable<T>(instance.post, url, data, config);
  }
}