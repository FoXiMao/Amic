import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Cookies from 'js-cookie'



Vue.use(Vuex)
Vue.use(VueAxios, axios)



export default new Vuex.Store({
       //state中存放的就是全局共享的数据
      state : {
           userId: '请先登陆',//用户ID
           nickname: '请先登陆',//用户昵称
           token: '',//用户登陆token
           level: '请先登陆',//用户等级
           listenSongs: '请先登陆',//用户听歌数量
           createTime: '',//用户注册时间
           backgroundUrl: '',//用户背景图
           avatarUrl: '',//用户头像
           signature: '请先登陆',//用户个性签名
           followeds: '',//用户粉丝数量
           follows: '',//用户关注数量
           cookie: '1'
        },
        //Mutation 用于变更Store中的数据
        mutations : {
          
          //登陆账号
          login(state,payload) {
            axios.post( "/login/cellphone?phone="+payload.cellphone+"&password="+payload.password).then(
               res=> {
                // console.log(res.data.profile.userId)
                 if(res.data.code === 200){
                  state.userId = res.data.profile.userId
                  state.token = res.data.token
                  window.localStorage.setItem('token',res.data.token);
                  window.localStorage.setItem('userId',res.data.profile.userId);
                //  console.log(this.state.userId)
                
                 }else{
                   console.log('账号或密码错误')
                 }
                 
                   
                }
              ).catch((error)=>{
               //console.log(error.request.status);
               if(error.request.status===400){
                  console.log("输入类型有误");
               }else if(error.request.status===501){
                 console.log("账号错误");
               }else{
                 console.log(error.request.status);
               }
            }
              )
          },
          getUserInfo(state){
              axios.post("/user/detail?uid="+state.userId).then(
                res => {
                 //  console.log(res.data)
                  state.nickname = res.data.profile.nickname
                 // console.log(state.nickname)
                  state.level = res.data.level
                 // console.log(state.level)
                  state.listenSongs = res.data.listenSongs
                 // console.log(state.listenSongs)
                  state.createTime = res.data.profile.createTime
                 //  console.log(state.createTime)
                  state.avatarUrl = res.data.profile.avatarUrl
                 // console.log(state.avatarUrl)
                  state.signature = res.data.profile.signature
                 // console.log(state.signature)
                //  console.log();
              
                // Cookies.set('MUSIC_U', state.token,{ expires: 3,path: 'musicapi.citrons.cn'  });
              
              const obj = [{
                userId: state.userId,
                nickname: state.nickname,
                level: state.level,
                listenSongs: state.listenSongs,
                signature: state.signature,
                token:state.token           
              }]
              localStorage.removeItem('accessToken')
                //将数组obj转换成json格式后存储到Local Storage中，并命名为accessToken
                localStorage.setItem('accessToken',JSON.stringify(obj) )
                }
              )
          },
          // setOutInfo(state){

          // },
          setUserInfo(state){
            const obj = [{
              userId: state.userId,
              nickname: state.nickname,
              level: state.level,
              listenSongs: state.listenSongs,
              signature: state.signature,
              token:state.token           
            }]
            // localStorage.removeItem('accessToken')
              //将数组obj转换成json格式后存储到Local Storage中，并命名为accessToken
              localStorage.setItem('accessToken',JSON.stringify(obj) )
          },
          LoginOut(state){
            axios.post('/logout').then(
              res =>{
                 localStorage.removeItem('accessToken')
                 state.userId = '请先登录'
                 state.nickname = '请先登录'
                 state.level = '请先登录'
                 state.listenSongs = '请先登录'
                 state.signature = '请先登录'
                //  console.log(state.userId)
                 localStorage.removeItem('userId')
                 localStorage.removeItem('token')
              }
            )
          }
        
        },
        //Action用于处理异步任务
        actions : {
          getInfoAsync(context){
            setTimeout(() => {
              context.commit('getUserInfo')
                  },800)
            },
        },
        //Getter用于对Store中的数据进行加工处理形成新的数据
        getters : {

        }
      }
   )