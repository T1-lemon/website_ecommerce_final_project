import requestApi from "../utils/requestApi";

export const loginServices = async (dataLogin) => {
  try {
    const respone = await requestApi({
      method: "post",
      url: "user/login",
      data: {
        user_name: `${dataLogin.name}`,
        password: `${dataLogin.password}`,
      },
    });
    return respone;
  } catch (error) {
    return error;
  }
};
