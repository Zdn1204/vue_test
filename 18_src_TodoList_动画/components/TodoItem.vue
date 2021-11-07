<template>
    <transition name="todo" appear>
        <li>
            <div>
                <input 
                    type="checkbox" 
                    :checked="todo.done" 
                    @change="handleCheck(todo.id)"
                >
                <span v-show="!todo.isEdit">{{todo.title}}</span>
                <input 
                    type="text" 
                    v-show="todo.isEdit"  
                    :value="todo.title" 
                    @blur="handleBlur(todo,$event)"
                    ref="inputTitle"
                >
            </div>
            <div class="change-del">
                <button 
                    class="changeBtn" 
                    v-show="!todo.isEdit" 
                    @click="handleEdit(todo)">编辑此项</button>
                <button 
                    class="delBtn" 
                    @click="handleDelItem(todo.id)">删除此项</button>
            </div>
        </li>
    </transition>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'TodoItem',
    // 声明接收todo对象    
    props:['todo'],
    methods: {
        handleCheck(id){
            // 通知App组件
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
        },
        handleDelItem(id){
            if(confirm('确定删除吗？')){
                // this.delItem(id)
                // this.$bus.$emit('delItem',id)
                pubsub.publish('delItem',id)
            }
        },
        handleEdit(todo){
            if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
                todo.isEdit = true;
            }else{
                // todo.isEdit = true;
                this.$set(todo,'isEdit',true)
            }
            this.$nextTick(()=>{
                this.$refs.inputTitle.focus()
            })
        },
        // 失去焦点回调（真正执行修改逻辑）
        handleBlur(todo,e){
            // 不建议直接修改props，但props为对象和数组的时候，修改其中的属性或元素不会报错
            todo.isEdit = false;
            if(!e.target.value.trim()) return alert('输入不能为空！')
            this.$bus.$emit('updateItem',todo.id,e.target.value)
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
        .change-del{
            margin-left: auto;
            margin-right: 10px;
            display: none;
            .changeBtn{
                margin-right:10px ;
                background-color: rgb(0, 79, 250);
                border: rgb(0, 79, 250) solid 2px;
            }
        }
        span{
            vertical-align:middle;
            font-size:12px;
        }
    }

    li:hover .change-del{
        display: block;
    }

    li:hover{
        background-color: rgb(224, 226, 226);
    }

    .todo-enter-active{
        animation: fly 0.5s linear;
    }
    .todo-leave-active{
        animation: fly 0.5s linear reverse;
    }

    @keyframes fly {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>