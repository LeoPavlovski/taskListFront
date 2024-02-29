import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://127.0.0.1:8000"
})

export default {
    async getTasks(){
        const response = await apiClient.get('api/todos');
        return response.data.data;
    },
    async createTask(body){
        try{
            const response = await apiClient.post('api/todo',body);
            console.log(response);
            return response;
        }
        catch(error){
            console.error('asdsadsaasddsa', error);
            throw error;
        }
    },
    async removeTodo(body){
        try{
            const response = await apiClient.delete(`api/todo/${body.id}`,body);
            console.log(response);
            return response;
        }
        catch(error){
            console.error('asdsadsaasddsa', error);
            throw error;
        }
    },
    async editTodo(body){
        try{
            const response = await apiClient.put(`api/todo/${body.id}`,body);
            console.log(response);
            return response;
        }
        catch(error){
            console.error('asdsadsaasddsa', error);
            throw error;
        }
    }
}