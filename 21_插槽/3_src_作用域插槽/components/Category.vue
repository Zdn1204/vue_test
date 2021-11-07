<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
      <slot :tour="tour">我是默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data() {
      return {
        tour:['长白山','洱海','华山','鄱阳湖'],
      }
    },
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