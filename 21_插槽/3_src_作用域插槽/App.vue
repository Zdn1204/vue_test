<template>
  <div class="container">
    
    <Category title="旅游">
      <template scope={tour}>  
        <ul>
            <li v-for="(t,index) in tour" :key="index">{{t}}</li>
        </ul>
      </template>
    </Category>
    <Category title="旅游">
      <template scope={tour}>  
        <ol>
            <li style="color:grey" v-for="(t,index) in tour" :key="index">{{t}}</li>
        </ol>
      </template>
    </Category>
    <Category title="旅游">
      <template scope={tour}>  
        <h4 v-for="(t,index) in tour" :key="index">{{t}}</h4>
      </template>
    </Category>
  </div>

</template>

<script>

import Category from './components/Category'
 
  export default {
    name:'App',
    components:{Category},
    
  }
    
</script>
<style lang="css">
  .container{
    display: flex;
    justify-content: space-around;
  }

  img,video{
    width: 100%;
  }

  .footer,h4{
    text-align: center;
  }
  
</style>


