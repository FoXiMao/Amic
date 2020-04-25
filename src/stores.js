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
    signature: '请先登陆',//用户个性签名
    cookie: '1',
    likeId:null,
    disabledQ:false,
    disabledD:false,
    disabledIn:false,
    disabledOut:false,
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
        
          localStorage.removeItem("likeId")
          window.localStorage.setItem("likeId", res.data.playlist[0].id);
        }
      )
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
          localStorage.removeItem('list')
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
    },
    setQ(state){
      let locl = localStorage.getItem('setQ')
      if(locl === null){
        state.disabledQ =! state.disabledQ
        localStorage.setItem('setQ', state.disabledQ)
      }else if(locl === 'true'){
        state.disabledQ = false
        localStorage.removeItem('setQ')
        localStorage.setItem('setQ', state.disabledQ)
      }else if(locl === 'false'){
        state.disabledQ = true
        localStorage.removeItem('setQ')
        localStorage.setItem('setQ', state.disabledQ)
      }
    },
    setD(state){
      // state.disabledD =true
      let locl = localStorage.getItem('setD')
      if(locl === null){
        state.disabledD =! state.disabledD
        localStorage.setItem('setD', state.disabledD)
      }else if(locl === 'true'){
        state.disabledD = false
        localStorage.removeItem('setD')
        localStorage.setItem('setD', state.disabledD)
      }else if(locl === 'false'){
        state.disabledD = true
        localStorage.removeItem('setD')
        localStorage.setItem('setD', state.disabledD)
      }
    },
    setI(state){
      // state.disabledIn =true
      let locl = localStorage.getItem('setI')

      if(locl === null){
        state.disabledIn =! state.disabledIn
        localStorage.setItem('setI', state.disabledIn)
      }else if(locl === 'true'){
        state.disabledIn = false
        localStorage.removeItem('setI')
        localStorage.setItem('setI', state.disabledIn)
      }else if(locl === 'false'){
        state.disabledIn = true
        localStorage.removeItem('setI')
        localStorage.setItem('setI', state.disabledIn)
      }
    },
    setO(state){
      // state.disabledOut =true
      let locl = localStorage.getItem('setO')

      if(locl === null){
        state.disabledOut =! state.disabledOut
        localStorage.setItem('setO', state.disabledOut)
      }else if(locl === 'true'){
        state.disabledOut = false
        localStorage.removeItem('setO')
        localStorage.setItem('setO', state.disabledOut)
      }else if(locl === 'false'){
        state.disabledOut = true
        localStorage.removeItem('setO')
        localStorage.setItem('setO', state.disabledOut)
      }
    },
  },
  //Action用于处理异步任务
  actions: {
    getInfoAsync(context) {
      setTimeout(() => {
        context.commit('getUserInfo')
      }, 800)
    },
    setQAsync(context) {
      setTimeout(() => {
        context.commit('setQ')
      }, 60000)
    },
    setDAsync(context) {
      setTimeout(() => {
        context.commit('setD')
      }, 60000)
    },
    setIAsync(context) {
      setTimeout(() => {
        context.commit('setI')
      }, 120000)
    },
    setOAsync(context) {
      setTimeout(() => {
        context.commit('setO')
      }, 120000)
    },
  },
  //Getter用于对Store中的数据进行加工处理形成新的数据
  getters: {

  }
}
)