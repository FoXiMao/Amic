import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Cookies from 'js-cookie'



Vue.use(Vuex)
Vue.use(VueAxios, axios)



export default new Vuex.Store({
  //state中存放的就是全局共享的数据
  state: {
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
    cookie: '1',
    likeId:null
  },
  //Mutation 用于变更Store中的数据
  mutations: {
    login(state) {
      let locl1 = localStorage.getItem('login')
      if (locl1 === '1') {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"))
        if(userInfo[0].loginFun === 'phone'){
        axios.post("/login/cellphone?phone=" + userInfo[0].cellphone + "&password=" + userInfo[0].password).then(
          res => {
              
            }
          )
        }else{
          axios.post("/login?email=" + userInfo[0].email + "&password=" + userInfo[0].password).then(
            res => {
              
              }
            )
        }
      }
    },
    getLikeId(state){
      let locl = localStorage.getItem('userId')
      axios.post('/user/playlist?uid='+locl).then(
        res =>{

          state.likeId = res.data.playlist[0].id
          const likeID = [
            {
              likeId: state.likeId,
            }
          ];
          localStorage.removeItem("likeId")
              localStorage.setItem("likeId", JSON.stringify(likeID))
        }
      )
    },
    getDayList(){
     axios.post('/recommend/songs').then(
            res => {
              this.dayList = res.data.recommend
              this.dayLength =res.data.recommend.length
              // console.log(this.dayList[0])
            }
          ) .catch(error => {
              //console.log(error.request.status);
              if (error.request.status === 301) {
                // console.log("输入类型有误");
                this.$message.error("未登陆");
              } else {
                //  console.log(error.request.status);
                this.$message('未知错误，建议重新登陆');
              }
            })
    },
    // 获取已登陆的用户信息
    getInfo(state) {
      let locl = localStorage.getItem('userId')
      if (locl !== null) {
        let userInfo = JSON.parse(localStorage.getItem("accessToken"))
        state.userId = userInfo[0].userId
        state.nickname = userInfo[0].nickname
        state.level = userInfo[0].level
        state.listenSongs = userInfo[0].listenSongs
        state.signature = userInfo[0].signature

      }
    },
    //获取Userd的信息
    getUserInfo(state) {
      let locl = localStorage.getItem('userId')
      state.userId = locl
      axios.post("/user/detail?uid=" + locl).then(
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
            token: state.token
          }]
          localStorage.removeItem('accessToken')
          //将数组obj转换成json格式后存储到Local Storage中，并命名为accessToken
          localStorage.setItem('accessToken', JSON.stringify(obj))
        }
      )
    },
    //设置登陆状态为未登陆
    setLoginIn() {
      localStorage.setItem('login', '1')
    },
    setUserInfo(state) {
      const obj = [{
        userId: state.userId,
        nickname: state.nickname,
        level: state.level,
        listenSongs: state.listenSongs,
        signature: state.signature,
        token: state.token
      }]
      // localStorage.removeItem('accessToken')
      //将数组obj转换成json格式后存储到Local Storage中，并命名为accessToken
      localStorage.setItem('accessToken', JSON.stringify(obj))
    },
    // 退出账号
    LoginOut(state) {
      axios.get('/logout').then(
        res => {
          // console.log(res)
          localStorage.removeItem('accessToken')
          state.userId = '请先登录'
          state.nickname = '请先登录'
          state.level = '请先登录'
          state.listenSongs = '请先登录'
          state.signature = '请先登录'
          //  console.log(state.userId)
          localStorage.removeItem('userId')
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          localStorage.removeItem('likeId')
        }
      )
    },
    //刷新登陆状态
    loginRefresh(state) {
      axios.post('/login/refresh').then(
        res => {
          // console.log(res)
        }
      ).catch(
        (error) => {
          if (error.request.status === 301) {
            console.log("未登陆");
          } else {
            console.log(error.request.status);
          }
        }
      )
    },
    // 存储cookie
    setCookies(state){
      let locl = localStorage.getItem('token')
      Cookies.set('MUSIC_U', locl, { expires: 15 });
      
    },
    // 删除cookie
    delCookies(state){
      Cookies.remove('MUSIC_U');
    }
  },
  //Action用于处理异步任务
  actions: {
    getInfoAsync(context) {
      setTimeout(() => {
        context.commit('getUserInfo')
      }, 800)
    },
  },
  //Getter用于对Store中的数据进行加工处理形成新的数据
  getters: {

  }
}
)