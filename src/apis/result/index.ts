import { instance } from "../instance"

const fetchResultAPI = async (userId = 1) => {
    return await instance.get(`/v2/api/result/${userId}`)
}

export { fetchResultAPI }