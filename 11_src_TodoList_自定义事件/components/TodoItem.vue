<template>
  <li>
      <div>
          <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"><span>{{todo.title}}</span>
      </div>
      <div class="del">
          <button class="delBtn" @click="handleDelItem(todo.id)">删除此项</button>
      </div>
  </li>
</template>

<script>
export default {
    name:'TodoItem',
    // 声明接收todo对象
    props:['todo','checkTodo','delItem'],
    methods: {
        handleCheck(id){
            // 通知App组件
            this.checkTodo(id)
        },
        handleDelItem(id){
            if(confirm('确定删除吗？')){
                this.delItem(id)
            }
        }
    },
}
</script>

<style lang="less" scoped>
    li{
        width: 499px;
        line-height: 34px;
        border-bottom: solid rgb(189, 189, 189) 1px;
        display: flex;
        .del{
            margin-left: auto;
            margin-right: 20px;
            display: none;
        }
        span{
            vertical-align:middle;
            font-size:12px;
        }
    }

    li:hover .del{
        display: block;
    }

    li:hover{
        background-color: rgb(224, 226, 226);
    }

    
</style>