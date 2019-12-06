<template>
  <div id="app">
    <h2>Colaboradores 2Brains</h2>
    <TableView></TableView>
  </div>
</template>

<script>
import TableView from '@/components/table-view.vue'

export default {
  name: 'app',
  components: {
    TableView
  },
   data: function () {
    return {
      title: 'Usuarios 2Brains'
    }
  }
}
</script>

<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
.d-flex {
  display: flex;
} 
.h-100 {
  height: 100%;
} 
.w-100 {
  width: 100%;
}
</style>
