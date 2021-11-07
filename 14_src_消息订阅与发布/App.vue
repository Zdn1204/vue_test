<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>

  </div>
</template>

<script>
  import Student from './components/Student.vue'
  import School from './components/School.vue'

  export default {
      name:'App',
      data() {
        return {
          msg:'你好啊',
        }
      },
      components:{
        Student,
        School
      },
      
  }
</script>

<style scoped>
  .app{
    background-color: rgb(255, 233, 187);
    padding: 5px;
  }
</style>