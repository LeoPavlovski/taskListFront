<template>
  <v-app>
    <v-main>
      <TaskComponent></TaskComponent>
    </v-main>
  </v-app>
</template>

<script>
import TaskComponent from "@/components/TaskComponent.vue";
export default {
  components:{
    TaskComponent
  },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
