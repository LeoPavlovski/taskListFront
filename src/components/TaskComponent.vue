<template>
  <div style="width:50%; margin:auto;">
    <v-text-field label="Name" v-model="name"></v-text-field>
    <div class="align-center justify-center d-flex">
      <v-btn fab @click="createTask">+</v-btn>
    </div>
    <v-card class="pa-5 my-2" elevation="3" v-for="item in todos" :key="item.id">
      <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <p class="ma-2"> {{item.name}}</p>
        <v-checkbox @click="editTodo(item)" label="is Completed" dense class="mt-n1" hide-details v-model="item.completed"></v-checkbox>
        </div>
        <div>
<!--          <v-icon color="blue" class="mr-2" style="cursor:pointer">mdi-pencil</v-icon>-->
          <v-icon @click="removeTodo(item)" color="red" style="cursor:pointer;">mdi mdi-delete</v-icon>
        </div>
      </div>

    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data(){
    return{
      completed:false,
      name:'',
    }
  },
  methods: {
    async getTasks() {
       await this.$store.dispatch('getTasks');
    },
    async removeTodo(item){
      console.log(item);
      const body = {
        id:item.id
      };
      await this.$store.dispatch('removeTodo',body).then(res=>{
        console.log(res);
        this.getTasks();
      });
    },
    async editTodo(item){
      console.log(item);
      const body = {
        id:item.id,
        completed: item.completed,
      };
      await this.$store.dispatch('editTodo',body).then(res=>{
        console.log(res);
        this.getTasks();
      });
    },
    async createTask(){
      const body = {
        completed:this.completed,
        name:this.name,
      };
      console.log(body);
      await this.$store.dispatch('createTask',body);
      this.name='';
      await this.getTasks();
    }
  },
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
  async mounted() {
    // Call the function here to get the GET REQUEST.
    await this.getTasks();
  }
};
</script>

<style scoped>
/* Your component styles */
</style>
