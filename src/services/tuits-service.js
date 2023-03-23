import axios from 'axios';

const SERVER_LINK = process.env.REACT_APP_DB_CONNECTION_STRING
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE ?? SERVER_LINK}/tuits`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data
}

export const findTuits = async () => {
    console.log("ENV", process.env)
    console.log("SERVER_LINK", process.env.REACT_APP_DB_CONNECTION_STRING)
    console.log("API_BASE", process.env.REACT_APP_API_BASE)

    const response = await axios.get(TUITS_API);
    return response.data;
}

export const deleteTuit = async (tid) => {
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}
