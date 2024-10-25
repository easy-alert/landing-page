import axios from "axios";

export const formApi = axios.create({
  baseURL: "https://webhook.hablla.com/v1/66f2bcf870c54828e7da82d0",
});
