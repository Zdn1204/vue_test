<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <div class="footer"  slot="footer">
        <a href="">更多美食</a>
      </div>
    </Category>
    <Category title="旅游">
      <ul  slot="center">
          <li v-for="(t,index) in tour" :key="index">{{t}}</li>
      </ul>
      <template v-slot:footer>
        <div class="footer">
          <a href="">自然景观</a> &nbsp;
          <a href="">人文古迹</a> 
        </div>
        <h4>欢迎前来游玩</h4>
      </template>
    </Category>
    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <div class="footer"  slot="footer">
        <a href="">更多好剧</a>
      </div>
    </Category>
    <Category title="宠物">
      <ul slot="center">
          <li v-for="(p,index) in pets" :key="index">{{p}}</li>
      </ul>
      <div class="footer" slot="footer">
          <a href="">更多萌宠</a>
      </div>
    </Category>
  </div>

</template>

<script>

import Category from './components/Category'
 
  export default {
    name:'App',
    components:{Category},
    data() {
      return {
        foods:['米线','冒菜','烧烤','火锅'],
        tour:['长白山','洱海','华山','鄱阳湖'],
        movies:['哈利波特','白蛇','速度与激情','西西里的美丽传说'],
        pets:['蓝猫','柴犬','长耳兔','金刚鹦鹉']
      }
    },
  }
    
</script>
<style lang="css">
  .container{
    display: flex;
    justify-content: space-around;
  }

  img,video{
    width: 100%;
  }

  .footer,h4{
    text-align: center;
  }
  
</style>


