<template>
    <div>
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" class="add" @keyup.enter="add">
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'TodoHeader',
    props:['addTodo'],
    methods: {
        add(e){
            // 校验数据（trim去掉前后空格）
            if(!e.target.value.trim()){
                alert("请输入内容！")
                return
            }
            
            // 将用户的输入包装成一个todo对象
            const todoObj = {id:nanoid(),title:e.target.value,done:false}
            // 通知App组件去添加一个todo对象
            this.addTodo(todoObj);
            // 清空输入
            e.target.value = ""

        }
    },
}
</script>

<style scoped>
    .add{
        width: 490px;
        height: 22px;
        border: solid 1px rgb(189, 189, 189);
        padding: 4px;
        border-radius: 4px;
    }
    .add::placeholder{
        color: rgb(189, 189, 189);
        font-size: 12px;
        padding-left: 4px;
    }
</style>