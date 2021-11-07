<template>
  <div class="container">
    <Search/>
    <List/>
  </div>

</template>

<script>
// import axios from 'axios'
  import Search from './components/Search'
  import List from './components/List'
 
  export default {
    name:'App',
    components:{
      Search,
      List
    }
  }
    
</script>


