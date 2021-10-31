<template>
  <div>
    <Student name="王五" sex="女" :age="20"></Student>
  </div>
</template>

<script>
  import Student from './components/Student.vue'

  export default {
      name:'App',
      components:{Student}
  }
</script>

<style>

</style>