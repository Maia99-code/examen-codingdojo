import axios from "./axios"
export const getComicsRequest = () => axios.get('/comics')

export const getComicRequest = (id) => axios.get(`/comics/${id}`)


export const createComicsRequest = (comic) => axios.post('/comics', comic)

export const updateComicsRequest = (comic) =>
     axios.put(`/comics/${comic._id}`,comic);


export const deleteComicsRequest = (id) => axios.delete(`/comics/${id}`)
