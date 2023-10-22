import Vue from "vue";

import axios from "axios";

const resource = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

Vue.prototype.$http = resource;

export default resource;
