import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 30000,
};

export const pokemonApi = axios.create(axiosConfig);
