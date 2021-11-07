<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>

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
            this.getSchoolName(this.name);
        }
    },
    mounted(){
        this.$bus.$on('hello',(data)=>{
            console.log('我是School组件，收到了数据',data);
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
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

