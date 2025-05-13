import axios from "axios";

const apiUrlWatchHistory = import.meta.env.VITE_API_URL_WATCH_HISTORY;
const apiUsers = import.meta.env.VITE_API_URL_USERS;

export const fetchWatchHistory = async () => {
  try {
    const response = await axios.get(apiUrlWatchHistory);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async(userData)=>{
    try {
        const response = await axios.post(apiUsers, userData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const geteUser = async()=>{
    try {
        const response = await axios.get(apiUsers);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getUserById =async(id)=>{
    try {
        const response = await axios.get(`${apiUsers}/${id}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async(id, userData)=>{
    try {
        const response = await axios.put(`${apiUsers}/${id}`, userData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = (id)=>{
    try {
        const response = axios.delete(`${apiUsers}/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}
