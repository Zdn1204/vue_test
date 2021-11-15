<template>
    <ul>
        <li :style="{opacity}">欢迎学习Vue</li>
        <li>news001 <input type="text"> </li>
        <li>news002 <input type="text"> </li>
        <li>news003 <input type="text"> </li>
    </ul>
</template>

<script>
export default {
    name:'News',
    /* beforeDestroy(){
        console.log('news即将被销毁了');
        clearInterval(this.timer);
    },
    mounted() {
        this.timer = setInterval(()=>{
            this.opacity -= 0.01;
            if(this.opacity <= 0) this.opacity = 1
        },16)
    }, */
    
    data() {
        return {
            opacity:1
        }
    },
    activated(){
        console.log('被激活')
        this.timer = setInterval(()=>{
            this.opacity -= 0.01;
            if(this.opacity <= 0) this.opacity = 1
        },16)
    },
    deactivated(){
        clearInterval(this.timer);
    }
}
</script>

<style>

</style>