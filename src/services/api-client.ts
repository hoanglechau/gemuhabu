import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1ae457ada0c444fd8a79f6def4f0dab4",
  },
});
