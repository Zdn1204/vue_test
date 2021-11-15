<template>
  <div>
    <h2>About组件内容</h2>
  </div>
</template>

<script>
export default {
    name:'About',

    mounted() {
      
    },

    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter (to, from, next) {
       if(localStorage.getItem('school')==='atguigu'){
            // document.title = to.meta.title || '硅谷系统'
            next();
        }else{
            alert('学校名错误，无权限查看');
        }
    },
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      next()
    }


}
</script>

<style>

</style>