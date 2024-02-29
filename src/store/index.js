import Vue from "vue";
import Vuex from 'vuex'

import taskListRepository from "@/repository/taskListRepository";

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        todos:[],
    },
    mutations:{
     GET_TODOS(state, payload){
         state.todos = payload;
     }
    },
    actions:{
       async getTasks({commit}){
            const response =  await taskListRepository.getTasks();
            commit('GET_TODOS',response)
            return response;
        },
        // eslint-disable-next-line no-unused-vars
        async createTask({commit} , body){
        return taskListRepository.createTask(body);
        },
        // eslint-disable-next-line no-unused-vars
        async removeTodo({commit} , body){
            return taskListRepository.removeTodo(body);
        },
        // eslint-disable-next-line no-unused-vars
        async editTodo({commit} , body){
            return taskListRepository.editTodo(body);
        }
    },
})