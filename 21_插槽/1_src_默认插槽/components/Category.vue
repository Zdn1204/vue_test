<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
      <slot>我是默认值，当使用者没有传递具体结构时，我会出现</slot>
      <!-- <ul>
          <li v-for="(item,index) in listData" :key="index">{{item}}</li>
      </ul> -->
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['listData','title']
}
</script>

<style>
    .category{
        background-color: pink;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        color: rgb(10, 132, 180);
    }
</style>