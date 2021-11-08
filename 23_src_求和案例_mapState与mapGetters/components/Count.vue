<template>
  <div>
    <!-- 模板里可以看到vc上的所有东西，不用this -->
    <h1>当前求和为{{sum}}</h1>
    <h3>当前求和放大10倍后为：{{bigSum}}</h3>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decriment">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
    name:'Count',
    data() {
      return {
        n:1,
      
      }
    },
    computed:{
      // 靠程序员自己亲自去写计算属性，计算属性的返回值最终出现在vm上
      /* sum(){
        return this.$store.state.sum
      },
      school(){
        return this.$store.state.school
      },
      subject(){
        return this.$store.state.subject
      },  */
      
      // 借助mapState生成计算属性，从state中读取数据（对象写法）
      // ...mapState({sum:'sum',school:'school',subject:'subject'}),

      // 借助mapState生成计算属性，从state中读取数据（数组写法）   
      ...mapState(['sum','school','subject']),

      /* bigSum(){
        return this.$store.getters.bigSum
      } */
      // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
      ...mapGetters(['bigSum'])
    },
    watch:{
      // computed中有sum，所以可以监听
      sum:{
        deep:true,
        handler(value){
          localStorage.setItem('sum',JSON.stringify(value))
        }
      }
    },
    methods: {
      increment(){
        this.$store.commit('JIA',this.n)
      },
      decriment(){
        this.$store.commit('JIAN',this.n)  
      },
      incrementOdd(){
          this.$store.dispatch('jiaOdd',this.n)
      },
      incrementWait(){
          this.$store.dispatch('jiaWait',this.n)
      }
    },
  
}
</script>
<style lang="css">
  button{
    margin-left:5px;
  }
</style>
