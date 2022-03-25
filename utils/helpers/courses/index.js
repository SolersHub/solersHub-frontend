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

export const updateCourse = async (id, body) => {
    return await http.patch(`/instructors/courses/update/${id}`, body)
}

export const addImage = async (id, body) => {
    return await http.patch(`/instructors/courses/${id}/image/upload`, body, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
}

export const addSection = async (id, body) => {
    return await http.patch(`/instructors/courses/${id}/section/add`, body)
}

export const deleteSection = async (id, sid) => {
    return await http.delete(`/instructors/courses/${id}/section/remove/${sid}`)
}

export const updateSection = async (id, sid, body) => {
    return await http.patch(`/instructors/courses/${id}/section/update/${sid}`, body)
}