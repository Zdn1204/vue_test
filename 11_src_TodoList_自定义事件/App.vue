<template>
  <div>
    <div class="container">
      <TodoHeader @addTodo="addTodo"/>
      <TodoList :todos="todos" :checkTodo="checkTodo" :delItem="delItem"/>
      <TodoFooter :todos="todos" @checkAllTodo="checkAllTodo" @delAllDone="delAllDone"/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

  export default {
    name:'App',
    components:{
      TodoHeader,
      TodoList,
      TodoFooter
    },
    data() {
      return {
          todos:JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    methods: {
      // 添加一个todo
      addTodo(todoObj){
        this.todos.unshift(todoObj);
      },
      // 勾选or取消勾选一个todo
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id)todo.done = !todo.done
        })
      },
      // 删除一个todo
      delItem(id){
        this.todos.forEach((todo,index)=>{
          if(todo.id === id) this.todos.splice(index,1)
        })
      },
      // 全选or全不选
      checkAllTodo(done){
        this.todos.forEach(todo => {
          todo.done = done
        });
      },
      // 清除所有已经完成的todo
      delAllDone(){
        this.todos = this.todos.filter((todo)=>{
            return !todo.done
        })
      }
    },
    watch:{
      todos:{
        deep:true,
        handler(value){
          localStorage.setItem('todos',JSON.stringify(value))
        }
      }
    }
  }
</script>

<style>
  .container{
    margin: 0 auto;
    padding: 10px;
    width: 500px;
    border: rgb(189, 189, 189) 1px solid;
  }

  input[type=checkbox]{
    vertical-align:middle;
    zoom:90%
  }

  button{
    border: rgb(206, 3, 3) 2px solid;
    border-radius: 4px;
    font-size: 12px;
    color: white;
    background-color: rgb(206, 3, 3);
    }
</style>