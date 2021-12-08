import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:4001",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
    
  }
});
