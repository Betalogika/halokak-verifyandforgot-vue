import resource from "./resource";

const endpoint = {
  verify: {
    index: "/verify",
    account: "account",
    check: "check",
  },
  changePassword: {
    index: "/change",
    password: "/password",
  },
};

const apis = {
  checkVerify(token) {
    return resource.get(
      `${endpoint.verify.index}/${token}/${endpoint.verify.check}`
    );
  },
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

export default apis;
