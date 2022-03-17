import http from "../axios-config";

export const login = async (loginData) => {
    return await http.post(`/instructors/login`, loginData);
};

export const signUp = async (Data) => {
    return await http.post(`/instructors/signup`, Data);
};
