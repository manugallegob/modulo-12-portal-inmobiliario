import Axios from 'axios';

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () =>
  Axios.get(saleTypeListUrl).then((response) => {
    return response.data;
  });

const equipmentsUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () =>
  Axios.get(equipmentsUrl).then((response) => {
    return response.data;
  });

const provincesUrl =  `${process.env.BASE_API_URL}/provinces`;

export const getProvincesList = () =>
  Axios.get(provincesUrl).then((response) => {
    return response.data;
  });

const propertiesUrl = `${process.env.BASE_API_URL}/properties`;

export const uploadNewProperty = (newProperty) => 
Axios.post(propertiesUrl, newProperty).then((response) => {
  return response.data
});