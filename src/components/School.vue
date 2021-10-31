<template>
  <div>
      <h2>学校名称：{{name | mySlice}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
// 引入一个混合

export default {
    name:'Student',
    data(){
        return{
            name:'cqupt12306',
            address:'cq'
        }
    }
}
</script>

