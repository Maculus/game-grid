import axios from "axios";

export default axios.create({
  
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8845ac1654604ad0be0c0d3924f79eed',
  },
});