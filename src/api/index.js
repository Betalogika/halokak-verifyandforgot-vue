import resource from "./resource";

const endpoint = {
  verify: {
    index: "/verify",
    account: "account",
    check: "check",
  },
  changePassword: {
    index: "/change",
    password: "password",
  },
  forgotPass: {
    index: "/forgot",
    check: "check",
    password: "password",
  },
};

const apis = {
  forgotPassword(data) {
    return resource.post(
      `${endpoint.forgotPass.index}/${endpoint.forgotPass.password}`,
      data
    );
  },
  checkForgotPass(token) {
    return resource.get(
      `${endpoint.forgotPass.index}/${token}/${endpoint.forgotPass.check}`
    );
  },

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
  changePassword(token, data) {
    return resource.post(
      `${endpoint.changePassword.index}/${token}/${endpoint.changePassword.password}`,
      data
    );
  },
};

export default apis;
