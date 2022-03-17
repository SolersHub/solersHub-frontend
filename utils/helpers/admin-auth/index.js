import http from "../axios-config";

export const adminlogin = async (loginData) => {
    return await http.post(`/instructors/login`, loginData);
};

export const adminsignUp = async (Data) => {
    return await http.post(`/instructors/signup`, Data);
};
