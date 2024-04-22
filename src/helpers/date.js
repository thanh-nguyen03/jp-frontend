import moment from "moment";

export const formatDateTime = (date) => {
  return moment(date).format("DD-MM-YYYY HH:mm:ss");
};

export const formatDate = (date) => {
  return moment(date).format("DD-MM-YYYY");
};
