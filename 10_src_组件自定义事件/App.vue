<template>
  <div class="app">
    <h1>{{msg}},{{studentName}}</h1>
    <!-- 通过 父组件给子组件传递函数类型分props实现：子给父传递数据-->
    <School :getSchoolName="getSchoolName"/>
    <!-- 通过 父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on-->
    <Student v-on:atcy="getStudentName" @demo="m1"/>

    <!-- 通过 父组件给子组件绑定一个自定义事件实现：子给父传递数据-->
    <!-- <Student ref="student，demo"/> -->

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
          studentName:''
        }
      },
      components:{
        Student,
        School
      },
      methods: {
        getSchoolName(name){
          console.log('App收到了学校名',name);
        },
        getStudentName(name){
          console.log('App收到了学生名',name)
          this.studentName = name
        },
        m1(){
          console.log("demo事件被触发了")
        }
      },
      mounted(){
        this.$refs.student.$on('atcy',this.getStudentName);//绑定自定义事件
        // this.$refs.student.$once('atcy',this.getStudentName)//绑定自定义事件（一次性）
        
      }
  }
</script>

<style scoped>
  .app{
    background-color: rgb(255, 233, 187);
    padding: 5px;
  }
</style>