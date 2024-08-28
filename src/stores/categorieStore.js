import axios from "axios";
import { param } from "jquery";
import { defineStore } from "pinia";

export const useCategorieStore = defineStore("categorie", {
  state: () => ({
    categories: [],
  }),
  getters: {},
  actions: {
    async getCategories() {
      var data = await axios.get("https://mahanay.hibaigle.net/cat/", {
        params: {
          logins: "h_mahanay",
          psw: "Hib?13_@2023!",
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data.data;
    },
  },
});
