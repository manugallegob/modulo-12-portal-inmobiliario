import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyDetail = (id) =>
  Axios.get(`${url}/${id}`).then((response) => {
    return response.data;
  });

const equipmentsUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () =>
  Axios.get(equipmentsUrl).then((response) => {
    return response.data;
  });

const contactUrl = `${process.env.BASE_API_URL}/contact`;

export const insertContact = (contact) =>
  Axios.post(contactUrl, contact).then((response) => {
    return response.data;
  });
