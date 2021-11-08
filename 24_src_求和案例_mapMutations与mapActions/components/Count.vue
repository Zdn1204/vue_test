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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapGetters, mapState,mapMutations, mapActions} from 'vuex'
export default {
    name:'Count',
    data() {
      return {
        n:1,
      
      }
    },
    computed:{
      
      // 借助mapState生成计算属性，从state中读取数据（对象写法）
      // ...mapState({sum:'sum',school:'school',subject:'subject'}),

      // 借助mapState生成计算属性，从state中读取数据（数组写法）   
      ...mapState(['sum','school','subject']),

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
      /* increment(){
        this.$store.commit('JIA',this.n)
      },
      decriment(){
        this.$store.commit('JIAN',this.n)  
      },*/

      // 借助mapMutations生成对应的方法，方法中会调用commit去凉席mutations（对象写法）
      ...mapMutations({increment:'JIA',decrement:'JIAN'}),

      /* incrementOdd(){
          this.$store.dispatch('jiaOdd',this.n)
      },
      incrementWait(){
          this.$store.dispatch('jiaWait',this.n)
      } */

      // 借助mapAcitons生成对应的方法，方法中会调用dispatch去练习actions（对象写法）
      ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
    },
  
}
</script>
<style lang="css">
  button{
    margin-left:5px;
  }
</style>
