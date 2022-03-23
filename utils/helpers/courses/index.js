import http from "../axios-config";

export const search = async (data) => {
    return await http.get(`/courses/search?q=${data}`);
};


export const getAllCourses = async () => {
    return await http.get(`/courses/`)
}

export const getOne = async (id) => {
    return await http.get(`/courses/single/${id}`)
}

export const addImage = async (id, body) => {
    return await http.patch(`/instructors/courses/${id}/image/upload`, body, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
}