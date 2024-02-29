import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://127.0.0.1:8000"
})

export default {
    async getTasks(){
        const response = await apiClient.get('api/todos');
        return response.data.data;
    }
}