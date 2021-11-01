<template>
  <div class="footer" v-show="total">
      <div class="allCheck">
          <!-- <input type="checkbox" :checked="isAll" @change="checkAll"> -->
          <input type="checkbox" v-model="isAll">
          <span>
              已完成{{doneTotal}}/全部{{total}}
          </span>
      </div>
      <div class="delAll">
          <button class="delAllBtn" @click="clearAllDone">清除已完成任务</button>
      </div>
  </div>
</template>

<script>
export default {
    name:'TodoFooter',
    props:['todos',"checkAllTodo","delAllDone"],
    computed:{
        total(){
            return this.todos.length
        },
        doneTotal(){
            /* let i = 0;
            this.todos.forEach(todo => {
                if(todo.done){
                    i++;
                }
            });
            return i; */
            return this.todos.reduce((pre,todo)=>pre + (todo.done ? 1 : 0),0);
        },
        isAll:{
            get(){
                return this.doneTotal === this.total && this.total > 0
            },
            set(value){
                this.checkAllTodo(value)
            }
        }
    },
    methods: {
        /* checkAll(e){
            this.checkAllTodo(e.target.checked)
        } */

        clearAllDone(){
            this.delAllDone()
        }
    },
}
</script>

<style lang="less" scoped>
    .footer{
        display: flex;
        font-size: 12px;
        span{
            margin-left: 15px;
        }
    }
    .delAll{
        margin-left: auto;
    }
    
</style>