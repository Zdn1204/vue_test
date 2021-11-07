<template>
  <ul>
      <TodoItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :checkTodo="checkTodo" :delItem="delItem"/>
  </ul>
</template>

<script>
import TodoItem from './TodoItem'
export default {
    name:'TodoList',
    components:{
        TodoItem
    },
    props:['todos','checkTodo','delItem']
   
}
</script>

<style scoped>
    ul{
        margin: 15px 0;
        padding: 0;
        list-style: none;
        border: 1px rgb(189, 189, 189) solid;
        border-bottom: none ;
    }
</style>