import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2ddf30a5bbbc4caa9197d04c9a539ccf",
  },
});
