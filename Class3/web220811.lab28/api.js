const PROVINCE_API = "https://provinces.open-api.vn/api/";
const DISTRICT_API = "https://provinces.open-api.vn/api/d";
const WARD_API = "https://provinces.open-api.vn/api/w";

export const getProvinces = () => {
  return fetch(PROVINCE_API).then((res) => res.json());
};

export const getDistrict = () => {
  return fetch(DISTRICT_API).then((res) => res.json());
};
