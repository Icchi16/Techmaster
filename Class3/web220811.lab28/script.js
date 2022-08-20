import { getProvinces } from "./api.js";
import { getDistrict } from "./api.js";

const createElement = (type, data, ...child) => {
  const e = document.createElement(type);
  e.textContent = data.name;
  e.value = data.code;
  return e;
};

window.onload = async function () {
  try {
    const provinces = await getProvinces();
    const districtsList = await getDistrict();
    const formProvinces = document.querySelector(".user-city");
    const formDistricts = document.querySelector(".user-district");

    provinces.forEach((e) => {
      formProvinces.append(createElement("option", e));
    });

    formProvinces.addEventListener("change", () => {
      formDistricts.innerHTML = `<option value="" selected>Chọn Quận Huyện</option>`;

      const selectedProvince = formProvinces.value;
      const district = districtsList.filter(
        (e) => e.province_code == selectedProvince
      );

      console.log(selectedProvince);
      console.log(district);

      district.forEach((e) => {
        formDistricts.append(createElement("option", e));
      });
    });

    console.log(provinces);
    console.log(districtsList);
  } catch (err) {
    console.log(err);
  }
};
