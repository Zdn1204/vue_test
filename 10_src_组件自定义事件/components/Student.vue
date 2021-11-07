<template>
  <div class="student">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click="sendStudentName">把学生名给App</button>
      <button @click="unbind">解绑atcy事件</button>
      <button @click="death">销毁当前Student组件的</button>
  </div>
</template>

<script>

export default {
    name:'Student',
    data(){
        return{
            name:'张三',
            sex:'男'
        }
    },
    methods: {
        sendStudentName(){
            // 触发student组件实例身上的atcy事件
            this.$emit('atcy',this.name);
            // this.$emit('demo')
        },
        unbind(){
            this.$off('atcy')//适用于解绑一个自定义事件
            // this.$off(['atcy','demo'])//适用于解绑多个自定义事件
            // this.$off();//解绑所有的自定义事件
        },
        death(){
            this.$destroy()//销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效
        }
    },
}
</script>

<style lang="less">
    .student{
        background-color: pink;
        padding: 5px;
    }
</style>

