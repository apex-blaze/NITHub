import axios from "axios";
require("dotenv").config();

export default axios.create({
  baseURL:
    process.env.REACT_APP_NODE_ENV !== "development"
      ? "https://nithub.herokuapp.com"
      : "http://localhost:5000",
});
