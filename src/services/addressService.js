import path from "path";

const fileUrl = new URL("../../assets/address.json", import.meta.url);

class AddressUtils {
  constructor() {
    this.provinces = {};
    this.districts = {};
    this.wards = {};

    this.getProvince = (code) => {
      return this.provinces[code] || null;
    };

    // Fetch the JSON file asynchronously
    fetch(fileUrl)
      .then((response) => response.json())
      .then((address) => {
        address.forEach((province) => {
          const province_code = province.code;
          this.provinces[province_code] = {
            name: province.name,
            code: province_code,
            codename: province.codename,
            division_type: province.division_type,
            phone_code: province.phone_code,
          };
          this.districts[province_code] = {};
          province.districts.forEach((district) => {
            const district_code = district.code;
            this.districts[province_code][district_code] = {
              province_code,
              name: district.name,
              code: district_code,
              division_type: district.division_type,
              short_codename: district.short_codename,
            };
            this.wards[province_code] = this.wards[province_code] || {};
            this.wards[province_code][district_code] = {};
            district.wards.forEach((ward) => {
              this.wards[province_code][district_code][ward.code] = {
                province_code,
                district_code,
                name: ward.name,
                code: ward.code,
                division_type: ward.division_type,
                short_codename: ward.short_codename,
              };
            });
          });
        });
      })
      .catch((error) => console.error("Error fetching address file:", error));
  }

  getDistrict(province_code, district_code) {
    return (this.districts[province_code] || {})[district_code] || null;
  }
  getWard(province_code, district_code, ward_code) {
    return (
      ((this.wards[province_code] || {})[district_code] || {})[ward_code] ||
      null
    );
  }
  getProvinces() {
    return Object.values(this.provinces);
  }
  getDistricts(province_code) {
    return Object.values(this.districts[province_code] || {});
  }
  getWards(province_code, district_code) {
    return Object.values(
      (this.wards[province_code] || {})[district_code] || {}
    );
  }
  getDetailedAddress(province_code, district_code, ward_code) {
    const province = this.getProvince(province_code);
    const district = this.getDistrict(province_code, district_code);
    const ward = this.getWard(province_code, district_code, ward_code);
    if (!province || !district || !ward) {
      return null;
    }
    const val = `${ward.name}, ${district.name}, ${province.name}`;
    return val;
  }
}
export default new AddressUtils();
