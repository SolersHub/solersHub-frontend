import http from "../axios-config";

export const search = async (data) => {
    return await http.get(`/courses/search?q=${data}`);
};


