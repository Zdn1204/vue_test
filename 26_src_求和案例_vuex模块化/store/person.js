// 人员管理相关的配置
import axios from 'axios'
import { nanoid } from 'nanoid';
export default {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value);
            }else{
                alert("添加的人必须姓王")
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data});
                },
                error => {
                    alert(error.message);
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,personObj){
            state.personList.unshift(personObj);
        }
    },
    state:{
        personList:JSON.parse(localStorage.getItem('personList'))||[{id:'001',name:'张晓明'}]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}