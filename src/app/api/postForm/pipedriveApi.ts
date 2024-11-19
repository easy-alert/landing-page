import axios from "axios";

export const baseURL = "https://webhook.hablla.com/v1/673cc60fa09e106f085e3df3";

export const formApi = axios.create({
  baseURL: "https://webhook.hablla.com/v1/673cc60fa09e106f085e3df3",
});
