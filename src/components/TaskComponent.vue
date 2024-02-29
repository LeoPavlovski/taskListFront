<template>
  <div>
    <div v-for="item in todos" :key="item.id">
      {{item}}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    async getTasks() {
       await this.$store.dispatch('getTasks');
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
