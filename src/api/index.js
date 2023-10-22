import resource from "./resource";

const endpoint = {
  verify: {
    index: "/verify",
    account: "account",
  },
  changePassword: {
    index: "/change",
    password: "/password",
  },
};

const api = {
  verify(token) {
    return resource.post(
      `${endpoint.verify.index}/${token}/${endpoint.verify.account}`
    );
  },
  forgotPassword(token) {
    return resource.post(
      `${endpoint.changePassword.index}/${token}/${endpoint.changePassword.password}`
    );
  },
};

export default api;
