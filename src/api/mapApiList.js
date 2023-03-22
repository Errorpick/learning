import axios from "./base";

export default {
  async getJsonData(jsonPath, params) {
    let res = [];
    // 可以根据传递不同参数，获取不同数据
    // if (params.type === 1) {
    //   res = await axios.get(jsonPath);
    // }
    res = await axios.get(jsonPath);
    return res.data.RECORDS || res.data.features;
  },
};
