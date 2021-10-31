<template>
    <!-- 组件的结构 -->

    <div class="demo1">
        <h2>学生姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
    </div>
</template>

<script>
    //组件交互相关的代码（数据、方法等）
    export default{
        name:'student',
        data() {
            return {
                name:"Tom",
                age:18
            }
        }
    }



</script>

<style>
    /* 组件的样式 */
    .demo1{
        background-color: rgb(11, 161, 248);
    }
</style>