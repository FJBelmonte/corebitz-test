import axios from "axios";

export default axios.create({
  baseURL: "https://desolate-brushlands-20405.herokuapp.com/api/v1/products"
});
