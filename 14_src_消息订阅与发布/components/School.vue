<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>

import pubsub from 'pubsub-js'

export default {
    name:'Student',
    props:['getSchoolName'],
    data(){
        return{
            name:'cqupt',
            address:'cq'
        }
    },
    methods: {
        sendSchoolName(){
            // this.getSchoolName(this.name);
           this.getSchoolName(this.name);
        },
        demo(msgName,data){
            console.log('有人发布了hello消息',msgName,data)
        }
    },
    mounted(){
        /* this.$bus.$on('hello',(data)=>{
            console.log('我是School组件，收到了数据',data);
        }) */
        this.pubId = pubsub.subscribe('hello',/* (msgName,data)=>{
            console.log('有人发布了hello消息',msgName,data)
        } */this.demo)
    },
    beforeDestroy(){
        /* this.$bus.$off('hello') */
        pubsub.unsubscribe(this.pubId);
    }
}
</script>
<style scoped>
    .school{
        border-radius: 5px;
        background-color: skyblue;
        padding: 5px;
        margin-bottom: 10px;
    }
</style>

