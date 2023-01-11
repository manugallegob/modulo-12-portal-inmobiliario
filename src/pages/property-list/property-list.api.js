import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = (queryParams) =>
  Axios.get(`${url}?${queryParams}`).then((response) => {
    return response.data;
  });

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () =>
  Axios.get(saleTypeListUrl).then((response) => {
    return response.data;
  });

const provincelistUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceList = () =>
  Axios.get(provincelistUrl).then((response) => {
    return response.data;
  });
