<template>
  <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" v-model="keyWord"/>
          &nbsp;
          <button @click="searchUsers">Search</button>
        </div>
      </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data() {
        return {
            keyWord:'',
        }
    },
    methods: {
        searchUsers(){
            // 请求前，更新List的数据
            this.$bus.$emit('updataListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    // 请求成功后，更新List的数据
                    // console.log(response.data.items)
                    this.$bus.$emit('updataListData',{isLoading:false,errMsg:'',users:response.data.items})
                },
                reason => {
                    // 请求失败后，更新List的数据
                    console.log('请求失败',reason.message)
                    this.$bus.$emit('updataListData',{isLoading:false,errMsg:reason.message,users:[]})
                }
            );
        }
    },
}
</script>
