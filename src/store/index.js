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
        }
    },
})