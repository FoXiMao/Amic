<template>
  <div>
    <!-- logo -->
    <section>
      <!-- 栅格居中排列 -->
      <el-row type="flex"  justify="center">
        <!-- 栅格响应式 -->
        <el-col  :xs="20" :sm="18" :md="12" :lg="12" :xl="12">
          <img class="logo" src="../assets/logo-header.png" alt />
        </el-col>
        <!-- /栅格响应式 -->
      </el-row>
      <!-- /栅格居中排列 -->
    </section>
    <!-- /logo -->
          <!-- PC端用户页面 -->
      <section>
        <!-- 当屏幕尺寸在xs的时候隐藏 -->
      <el-row class="hidden-xs-only">
        <!-- 占据9份,偏移三份 -->
        <el-col  :span="9" :offset="3">
          <div class="wapper-panl">
            <el-card class="panl" shadow="always">{{this.nickname}},欢迎使用网易云音乐一键打卡程序</el-card>
            <div>
              <el-button @click="qiandao" class="panl-button" type="danger" :disabled=this.$store.state.disabledQ>签到</el-button>
            </div>
            <div>
              <el-button class="panl-button" @click="dialogVisible1 = true" type="danger" :disabled=this.$store.state.disabledD>听歌打卡</el-button>
            </div>
            <div>
              <el-button
                @click="centerDialogVisible1 = true"
                v-show="loginButtonShow"
                class="panl-button"
                type="danger"
                :disabled=this.$store.state.disabledIn
              >登陆</el-button>
            </div>
            <div>
              <el-button
                @click="LoginOut"
                v-show="loginOutShow"
                class="panl-button"
                type="danger"
                :disabled=this.$store.state.disabledOut
              >注销登陆</el-button>
            </div>
            <br />
            <el-divider></el-divider>
            <center>
              <span>我们的一生，终究是孤独的</span>
            </center>
          </div>
        </el-col>
        
        <el-col :span="7" :offset="2" class="hidden-xs-only">
          <div class="wapper-panl">
            <el-card class="panl" shadow="always">
              当前登陆用户信息&nbsp;|&nbsp;
              <el-button type="text" @click="dialogVisible = true">About AMCI</el-button>
            </el-card>
            <div class="user-info">
              userId：{{this.userId}}
              <el-divider></el-divider>
              昵称：{{this.nickname}}
              <el-divider></el-divider>
              等级：{{this.level}}
              <el-divider></el-divider>
              听歌数量：{{this.listenSongs}}
              <el-divider></el-divider>
              个性签名：{{this.signature}}
              <el-divider></el-divider>
            </div>
          </div>
        </el-col>
      </el-row>
      </section>

      <section>
      <el-row type="flex"  justify="center">

        <el-col class="hidden-sm-and-up"  :span="18" >
          <div class="wapper-panl">
            <el-card class="panl" shadow="always">当前登陆用户:{{this.nickname}}</el-card>
            <div>
              <el-button @click="qiandao" class="panl-button" type="danger" disabled>签到</el-button>
            </div>
            <div>
              <el-button class="panl-button" @click="dialogVisible2 = true" type="danger" disabled>听歌打卡</el-button>
            </div>
            <div>
              <el-button
                @click="centerDialogVisible = true"
                v-show="loginButtonShow"
                class="panl-button"
                type="danger"
              >登陆</el-button>
            </div>
            <div>
              <el-button
                @click="LoginOut"
                v-show="loginOutShow"
                class="panl-button"
                type="danger"
              >注销登陆</el-button>
            </div>
            <br />
            <el-divider></el-divider>
            <center>
              <p>我们的一生，终究是孤独的</p><el-button type="text" @click="dialogVisible3 = true">关于AMCI</el-button>
            </center>
          </div>
        </el-col>
      </el-row>
    </section>
   
    <!-- PC端关于弹窗 -->
    <el-dialog
      title="About AMIC"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <span>Q:我的账号安全吗？</span>
      <br />
      <span>A:密码储存在你的本地，非常安全</span>
      <el-divider></el-divider>
      <span>Q:这个程序是干嘛的？</span>
      <br />
      <span>A:网易云一键签到，一键听满300首歌，刷等级</span>
      <el-divider></el-divider>
      <span>Q:会改变我的听歌风格吗？</span>
      <br />
      <span>A:不会，刷的是每日推荐或者你标记喜欢的歌曲</span>
      <el-divider></el-divider>
      <span>Q:为什么只刷了一部分或者没刷</span>
      <br />
      <span>A:网易云数据一般下午两点更新</span>
       <el-divider></el-divider>
      <span>开发者：Citrons</span>
      <el-divider></el-divider>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
     <!-- 移动端关于弹窗 -->
    <el-dialog
      title="About AMIC"
      :visible.sync="dialogVisible3"
      width="90%"
      :before-close="handleClose"
    >
      <span>Q:我的账号安全吗？</span>
      <br />
      <span>A:密码储存在你的本地，非常安全</span>
      <el-divider></el-divider>
      <span>Q:这个程序是干嘛的？</span>
      <br />
      <span>A:网易云一键签到，一键听满300首歌，刷等级</span>
      <el-divider></el-divider>
      <span>Q:会改变我的听歌风格吗？</span>
      <br />
      <span>A:不会，刷的是每日推荐或者你标记喜欢的歌曲</span>
      <el-divider></el-divider>
      <span>Q:为什么只刷了一部分或者没刷</span>
      <br />
      <span>A:网易云数据一般下午两点更新</span>
      <el-divider></el-divider>
      <span>开发者：Citrons</span>
      <el-divider></el-divider>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible3 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible3 = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- PC端选择打卡界面 -->
    <el-dialog
      title="选择播放内容"
      :visible.sync="dialogVisible1"
      width="30%"
      :before-close="handleClose"
    >
      <el-checkbox-group v-model="checkList">
         <el-tooltip class="item" effect="dark" content="该功能接口不稳定，所以用作备选" placement="top-start">
        <el-checkbox label="日推歌曲"></el-checkbox></el-tooltip>
        <el-tooltip class="item" effect="dark" content="为了不影响您的听歌口味，此项必选，推荐歌曲备选" placement="top-start">
        <el-checkbox label="我喜欢的音乐" disabled></el-checkbox></el-tooltip>
      </el-checkbox-group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="play">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 移动端打卡选择界面 -->
    <el-dialog
      title="选择播放内容"
      :visible.sync="dialogVisible2"
      width="70%"
      :before-close="handleClose"
    >
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="日推歌曲"></el-checkbox>
        <el-checkbox label="我喜欢的音乐"></el-checkbox>
      </el-checkbox-group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="play">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 移动端登陆弹窗 -->
         <el-dialog
  title="登陆网易云音乐"
  :visible.sync="centerDialogVisible"
  width="90%"
  center>
   <el-input
    placeholder="手机号码/绑定邮箱"
    prefix-icon="el-icon-user-solid"
    v-model="cellphone">
  </el-input>
    <el-input
    show-password
    style="margin-top : 20px"
    placeholder="请输入密码"
    prefix-icon="el-icon-s-help"
    v-model="password">
  </el-input>
<div style="margin-top: 20px">
    <el-radio-group v-model="radio" size="mini" border>
      <el-radio label="1" border>手机登陆</el-radio>
      <el-radio label="2" border>邮箱登陆</el-radio>
    </el-radio-group>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading" @click="loginMb">登 陆</el-button>
  </span>
</el-dialog>

<!-- PC界面登陆弹窗 -->
 <el-dialog
  title="登陆网易云音乐"
  :visible.sync="centerDialogVisible1"
  width="30%"
  center>
   <el-input
    placeholder="手机号码/绑定邮箱"
    prefix-icon="el-icon-user-solid"
    v-model="cellphone">
  </el-input>
    <el-input
        show-password
    style="margin-top : 20px"
    placeholder="请输入密码"
    prefix-icon="el-icon-s-help"
    v-model="password">
  </el-input>
<div style="margin-top: 20px">
    <el-radio-group v-model="radio" size="mini" border>
      <el-radio label="1" border>手机登陆</el-radio>
      <el-radio label="2" border>邮箱登陆</el-radio>
    </el-radio-group>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" v-loading.fullscreen.lock="fullscreenLoading" @click="login">登 陆</el-button>
  </span>
</el-dialog>

<!-- 开屏弹窗 -->
<el-dialog
  title="请注意"
  :visible.sync="tost"
  width="50%"
  :before-close="handleClose">
  &nbsp;&nbsp;&nbsp;&nbsp;由于网易服务器高频ip限制，同时也为了缓解我服务器的压力，于是我设置了缓存，缓存时间为2分钟，相同的请求会在2分钟内只向网易服务器发一次请求，<br>&nbsp;&nbsp;&nbsp;&nbsp;所以这里建议您操作一个账号之后等待3-4分钟再操作另外的账号，否则你全都是在为我在刷 = =<br> &nbsp;&nbsp;&nbsp;&nbsp;我觉得你们不会等着三四分钟，于是我设置操作一次后按钮呈禁用状态,两分钟后解禁
  <span slot="footer" class="dialog-footer">
    <el-button @click="tost = false">取 消</el-button>
    <el-button type="primary" @click="tost = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
//定义一个节流函数
function throttle(fn, interval) {
    var last;
    var timer;
    var interval = interval || 3000;
    return function () {
        var th = this;
        var args = arguments;
        var now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                fn.apply(th, args);
            }, interval);
        } else {
            last = now;
            fn.apply(th, args);
        }
    }

}
export default {
  data() {
    return {
      dialogVisible: false, //About弹窗状态
      dialogVisible1: false, //选择播放内容状态
      dialogVisible2: false, //选择播放内容状态
      dialogVisible3: false,
      tost: true,
      centerDialogVisible: false,
      centerDialogVisible1:false,
      checkList: ["我喜欢的音乐"],
      cellphone: null,
      radio: '1',
      email:null,
      password: null,
      loginShow: false, //登陆弹窗状态
      fullscreenLoading: false, //加载状态
      loginButtonShow: true,//登陆按钮状态
      loginOutShow: false,//注销登陆按钮状态
      palyList:[],//刷哥列表
      dayLength:null,//日推参数长度
      likeLength:null,//喜欢列表参数长度s
      dayList:[],//日推歌曲数据
      likeList:[],//喜欢列表数据
      dayId:[],//s日推专辑ID
      code:null,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // PC登陆
    login() {
      //判断用户选择的是什么登陆
      //如果选择手机登录则执行手机登陆方式
      if(this.radio === '1'){
      //根据选择的结果选择登陆方式
      //不允许输入框为空
      if (this.cellphone !== "" && this.password !== "") {
        // this.$store.commit('login',{cellphone :this.cellphone,password: this.password})
        // this.$store.dispatch('getInfoAsync')
        this.axios.post(
          "/login/cellphone?phone=" +
              this.cellphone +
              "&password=" +
              this.password
          )
          .then(
            res => {
              // console.log(res.data.profile.userId)
              //如果成功则将返回数据存储在state中
              if (res.data.code === 200) {
                this.token = res.data.token;
                window.localStorage.setItem("token", res.data.token);
                window.localStorage.setItem("userId", res.data.profile.userId);

                //  console.log(this.state.userId)
                this.loginShow = false;
                this.fullscreenLoading = true;
                setTimeout(() => {
                  this.fullscreenLoading = false;
                }, 1000);
                this.loginButtonShow = false;
                this.loginOutShow = true;
                this.$store.commit("setLoginIn");
                this.$store.commit("getUserInfo");
                const user = [
                  {
                    password: this.password,
                    cellphone: this.cellphone,
                    loginFun: 'phone'
                  }
                ];
                localStorage.removeItem("userInfo")
                  localStorage.setItem("userInfo", JSON.stringify(user))
                  this.$store.commit('getLikeId')
                     this.$store.commit('loginRefresh')
                     this.centerDialogVisible1 = false
                    this.$store.commit('setCookies')
                     this.$store.commit('setI')
                     this.$store.dispatch('setIAsync')
              } else {
                //否则打印错误信息

                this.$message.error("账号或密码错误");
              }
            }
            //400和501状态码捕捉
          )
          .catch(error => {
            //console.log(error.request.status);
            if (error.request.status === 400) {
              // console.log("输入类型有误");
              this.$message({
                message: "输入类型有误",
                type: "warning",
                center: true
              });
            } else if (error.request.status === 501) {
              //  console.log("账号错误");
              this.$message.error("账号错误");
            } else {
              //  console.log(error.request.status);
              this.$message(error.request.status);
            }
          });
        // this.loginShow = false
        // this.loginButtonShow = false
        // this.loginOutShow = true
      } else {
        this.$message({
          message: "账号或密码不能为空",
          type: "warning",
          center: true
        });
      }
    }else if(this.radio === '2'){//邮箱登陆方法
    
    //  将输入框的值传给Email
     this.email = this.cellphone
      //不允许输入框为空
      if (this.email !== "" && this.password !== "") {
        // this.$store.commit('login',{cellphone :this.cellphone,password: this.password})
        // this.$store.dispatch('getInfoAsync')
        this.axios.post("/login?email="+this.email+"&password="+this.password )
          .then(
            res => {
              // console.log(res.data.profile.userId)
              //如果成功则将返回数据存储在state中
              if (res.data.code === 200) {
                this.token = res.data.token;
                window.localStorage.setItem("token", res.data.token);
                window.localStorage.setItem("userId", res.data.profile.userId);

                //  console.log(this.state.userId)
                this.loginShow = false;
                this.fullscreenLoading = true;
                setTimeout(() => {
                  this.fullscreenLoading = false;
                }, 1000);
                this.loginButtonShow = false;
                this.loginOutShow = true;
                this.$store.commit("setLoginIn");
                this.$store.commit("getUserInfo");
                const user = [
                  {
                    password: this.password,
                    email: this.email,
                    loginFun: 'eamil'
                  }
                ];
                localStorage.removeItem("userInfo")
                  localStorage.setItem("userInfo", JSON.stringify(user))
                  this.$store.commit('getLikeId')
                     this.$store.commit('loginRefresh')
                     this.centerDialogVisible = false
                    this.$store.commit('setCookies')
                     this.$store.commit('setI')
                     this.$store.dispatch('setIAsync')
              } else {
                //否则打印错误信息

                this.$message.error("账号或密码错误");
              }
            }
            //400和501状态码捕捉
          )
          .catch(error => {
            //console.log(error.request.status);
            if (error.request.status === 400) {
              // console.log("输入类型有误");
              this.$message({
                message: "输入类型有误",
                type: "warning",
                center: true
              });
            } else if (error.request.status === 501) {
              //  console.log("账号错误");
              this.$message.error("账号错误");
            } else {
              //  console.log(error.request.status);
              this.$message(error.request.status);
            }
          });
        // this.loginShow = false
        // this.loginButtonShow = false
        // this.loginOutShow = true
      } else {
        this.$message({
          message: "账号或密码不能为空",
          type: "warning",
          center: true
        });
      }
    }
    },
        // 手机登陆
    loginMb() {
       //判断用户选择的是什么登陆
      //如果选择手机登录则执行手机登陆方式
      if(this.radio === '1'){
      //根据选择的结果选择登陆方式
      //不允许输入框为空
      if (this.cellphone !== "" && this.password !== "") {
        // this.$store.commit('login',{cellphone :this.cellphone,password: this.password})
        // this.$store.dispatch('getInfoAsync')
        this.axios.post(
          "/login/cellphone?phone=" +
              this.cellphone +
              "&password=" +
              this.password
          )
          .then(
            res => {
              // console.log(res.data.profile.userId)
              //如果成功则将返回数据存储在state中
              if (res.data.code === 200) {
                this.token = res.data.token;
                window.localStorage.setItem("token", res.data.token);
                window.localStorage.setItem("userId", res.data.profile.userId);

                //  console.log(this.state.userId)
                this.loginShow = false;
                this.fullscreenLoading = true;
                setTimeout(() => {
                  this.fullscreenLoading = false;
                }, 1000);
                this.loginButtonShow = false;
                this.loginOutShow = true;
                this.$store.commit("setLoginIn");
                this.$store.commit("getUserInfo");
                const user = [
                  {
                    password: this.password,
                    cellphone: this.cellphone,
                    loginFun: 'phone'
                  }
                ];
                localStorage.removeItem("userInfo")
                  localStorage.setItem("userInfo", JSON.stringify(user))
                  this.$store.commit('getLikeId')
                     this.$store.commit('loginRefresh')
                     this.centerDialogVisible1 = false
                    this.$store.commit('setCookies')
                     this.$store.commit('setI')
                     this.$store.dispatch('setIAsync')
              } else {
                //否则打印错误信息

                this.$message.error("账号或密码错误");
              }
            }
            //400和501状态码捕捉
          )
          .catch(error => {
            //console.log(error.request.status);
            if (error.request.status === 400) {
              // console.log("输入类型有误");
              this.$message({
                message: "输入类型有误",
                type: "warning",
                center: true
              });
            } else if (error.request.status === 501) {
              //  console.log("账号错误");
              this.$message.error("账号错误");
            } else {
              //  console.log(error.request.status);
              this.$message(error.request.status);
            }
          });
        // this.loginShow = false
        // this.loginButtonShow = false
        // this.loginOutShow = true
      } else {
        this.$message({
          message: "账号或密码不能为空",
          type: "warning",
          center: true
        });
      }
    }else if(this.radio === '2'){//邮箱登陆方法
    
    //  将输入框的值传给Email
     this.email = this.cellphone
      //不允许输入框为空
      if (this.email !== "" && this.password !== "") {
        // this.$store.commit('login',{cellphone :this.cellphone,password: this.password})
        // this.$store.dispatch('getInfoAsync')
        this.axios.post("/login?email="+this.email+"&password="+this.password )
          .then(
            res => {
              // console.log(res.data.profile.userId)
              //如果成功则将返回数据存储在state中
              if (res.data.code === 200) {
                this.token = res.data.token;
                window.localStorage.setItem("token", res.data.token);
                window.localStorage.setItem("userId", res.data.profile.userId);

                //  console.log(this.state.userId)
                this.loginShow = false;
                this.fullscreenLoading = true;
                setTimeout(() => {
                  this.fullscreenLoading = false;
                }, 1000);
                this.loginButtonShow = false;
                this.loginOutShow = true;
                this.$store.commit("setLoginIn");
                this.$store.commit("getUserInfo");
                const user = [
                  {
                    password: this.password,
                    email: this.email,
                    loginFun: 'eamil'
                  }
                ];
                localStorage.removeItem("userInfo")
                  localStorage.setItem("userInfo", JSON.stringify(user))
                  this.$store.commit('getLikeId')
                     this.$store.commit('loginRefresh')
                     this.centerDialogVisible1 = false
                    this.$store.commit('setCookies')
                     this.$store.commit('setI')
                     this.$store.dispatch('setIAsync')
              } else {
                //否则打印错误信息

                this.$message.error("账号或密码错误");
              }
            }
            //400和501状态码捕捉
          )
          .catch(error => {
            //console.log(error.request.status);
            if (error.request.status === 400) {
              // console.log("输入类型有误");
              this.$message({
                message: "输入类型有误",
                type: "warning",
                center: true
              });
            } else if (error.request.status === 501) {
              //  console.log("账号错误");
              this.$message.error("账号错误");
            } else {
              //  console.log(error.request.status);
              this.$message(error.request.status);
            }
          });
        // this.loginShow = false
        // this.loginButtonShow = false
        // this.loginOutShow = true
      } else {
        this.$message({
          message: "账号或密码不能为空",
          type: "warning",
          center: true
        });
      }
    }
    },
    //登出
    LoginOut() {
      this.$store.commit("LoginOut"), (this.fullscreenLoading = true);
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 1000);

      this.loginButtonShow = true;
      this.loginOutShow = false;
      //  this.$store.commit('loginRefresh');
      // this.$store.commit('loginStatus');
      localStorage.removeItem("login");
      this.$store.commit('loginRefresh')
       this.$store.commit('delCookies')
       this.$store.commit('setO')
       this.$store.dispatch('setOAsync')
      //  window.location.reload(true)
    },
    //检测账号登陆状态
    loginStatus(state) {
      let locl = localStorage.getItem("login");
      // console.log(locl)
      if (locl === "0" || locl === null) {
        // console.log('yes')
        this.loginButtonShow = true;
        this.loginOutShow = false;
      } else {
        // console.log('no')
        this.loginButtonShow = false;
        this.loginOutShow = true;
      }
    },


    qiandao() {
      this.$store.commit("login");
       this.$store.commit('loginRefresh')
            let locl = localStorage.getItem('userId')
            if(locl !==null){
      this.$axios.post("/daily_signin").then(res => {
     
          if (res.data.code === 200) {
            this.$message({
              message: "签到成功",
              type: "success",
              center: true
            });
         this.$store.commit('setQ')
         this.$store.dispatch('setQAsync')
          }
        })
        .catch(error => {
          if (error.request.status === 400) {
          console.log('哈哈哈哈哈哈，我就不提示你')
         this.$store.commit('setQ')
         this.$store.dispatch('setQAsync')
          } else if (error.request.status === 301) {
            this.$message.error("未登录");
         this.$store.commit('setQ')
         this.$store.dispatch('setQAsync')
          } else {
         this.$message("未知错误");
         this.$store.commit('setQ')
         this.$store.dispatch('setQAsync')
          }
        })
      
         this.$axios.post("/daily_signin?type=1")
        .then(res => {
        })
         .catch(error => {
          if (error.request.status === 400) {
          console.log('哈哈哈哈哈哈，我就不提示你')
          } else if (error.request.status === 301) {
            console.log("未登录");
          } else {
             console.log("未知错误");
          }
        })
           }else{
           this.$message.error("未登录")
         }

    },
      play(){
      this.$store.commit('login')
      this.dialogVisible1 = false
      this.palyList =[]
      this.dayId = []
      this.likeList =[]
      this.likeId =[]
     this.likeId = localStorage.getItem('likeId')
      if(this.checkList.length === 2){
       //获取每日推荐歌曲
      //  console.log(this.checkList)
       
       this.$axios.post('/recommend/songs').then(
          res => {
            
            //  console.log(res)
              this.dayLength =res.data.recommend.length
               this.dayList = res.data.recommend
            for(var i =0 ; i<=res.data.recommend.length;i++){
              this.palyList.push(this.dayList[i].id) 
              this.dayId.push(res.data.recommend[i].album.id)
            // localStorage.setItem("list", JSON.stringify(this.palyList))
            }
          }
        )  .catch(  error => {
            console.log(error)
          })
          // /likelist?uid=32953014
          let locl = localStorage.getItem('userId')
      this.$axios.post('/likelist?uid='+locl).then(
        res => {
          for(var j = 0;j<= res.data.ids.length;j++){
            this.palyList.push(res.data.ids[j])
            this.likeList.push(res.data.ids[j])
          }
          // console.log(this.palyList)
          // console.log(this.dayId)
          // console.log(this.likeList)
          // console.log(this.likeId)
            this.$store.commit('setD')
         this.$store.dispatch('setDAsync')
         if(this.palyList.length >=500){
           for(var q = 0; q <= this.dayId.length;q++){
           
          this.$axios.get('/scrobble?id='+this.dayList[q]+'&sourceid='+this.dayId[q]+'&time=300').then(
          res =>{
            console.log(res)
          }
        )
           }
           for(var p =0 ;p<=this.likeList.length;p++){
            
 this.$axios.get('/scrobble?id='+this.likeList[id]+'&sourceid='+this.likeId+'&time=300').then(
          res =>{
            console.log(res)
          }
        )
           }
              // this.$message.error("当前可获取歌曲数量:"+this.palyList.length+",如果您的歌曲数较少，请多点几次");
         }else if(this.palyList.length <500){
            for(var q = 0; q <= this.dayId.length;q++){
          this.$axios.get('/scrobble?id='+this.dayList[q]+'&sourceid='+this.dayId[q]+'&time=300').then(
          res =>{
            console.log(res)
          }
        )
           }
           for(var p =0 ;p<=this.likeList.length;p++){
        this.$axios.get('/scrobble?id='+this.likeList[p]+'&sourceid='+this.likeId+'&time=300').then(
          res =>{
            console.log(res)
          }
        )
         }
            
         }
         this.$message("当前可获取歌曲数量:"+this.palyList.length+",如果您的歌曲数较少，请多点几次"); 
            
        }
      )
     

      }else {
        this.palyList =[]
       //  console.log(this.checkList)
     let locl = localStorage.getItem('userId')
     var that = this;
         this.$axios.post('/likelist?uid='+locl).then(
        res => {
          for(var j = 0;j<= res.data.ids.length;j++){
            this.palyList.push(res.data.ids[j])
            this.likeList.push(res.data.ids[j])
          }
          // console.log(this.palyList)
          // console.log(this.dayId)
          // console.log(this.likeList)
          // console.log(this.likeId)
            this.$store.commit('setD')
         this.$store.dispatch('setDAsync')
           for(var p =0 ;p<=this.likeList.length;p++){
 this.$axios.get('/scrobble?id='+this.likeList[p]+'&sourceid='+this.likeId+'&time=300').then(
          res =>{
            
          } 
        )
           }
            
              // this.$message.error("当前可获取歌曲数量:"+this.palyList.length+",如果您的歌曲数较少，请多点几次");
            
             this.$message("当前可获取歌曲数量:"+this.palyList.length+",如果您的歌曲数较少，请多点几次");  
        }
      )
      }
    } ,
    getQ(){
      let locl = localStorage.getItem('setQ')
     this.$store.state.disabledQ = locl
      setTimeout(() => {
       if(locl === 'true'){
        this.$store.state.disabledQ = false
        localStorage.removeItem('setQ')
      }else if(locl === 'false'){
         this.$store.state.disabledQ = false
         localStorage.removeItem('setQ')
      }
        }, 60000);
    },
       getD(){
          let locl = localStorage.getItem('setD')
     this.$store.state.disabledD = locl
      setTimeout(() => {
       if(locl === 'true'){
        this.$store.state.disabledD = false
        localStorage.removeItem('setD')
      }else if(locl === 'false'){
         this.$store.state.disabledD = false
         localStorage.removeItem('setD')
      }
        }, 60000);
    },
       getI(){
          let locl = localStorage.getItem('setI')
     this.$store.state.disabledIn = locl
      setTimeout(() => {
       if(locl === 'true'){
        this.$store.state.disabledIn = false
        localStorage.removeItem('setI')
      }else if(locl === 'false'){
         this.$store.state.disabledIn = false
         localStorage.removeItem('setI')
      }
        }, 120000);
    },
       getO(){
          let locl = localStorage.getItem('setO')
     this.$store.state.disabledOut = locl
      setTimeout(() => {
       if(locl === 'true'){
        this.$store.state.disabledOut = false
        localStorage.removeItem('setO')
      }else if(locl === 'false'){
         this.$store.state.disabledOut = false
         localStorage.removeItem('setO')
      }
        }, 120000);
    },
    weTost(){
      let loclQ = localStorage.getItem('setQ')
       let loclI = localStorage.getItem('setI')
        let loclD = localStorage.getItem('setD')
         let loclO = localStorage.getItem('DsetO')
      // console.log(locl)
      if(loclQ !== null){
         this.$message({
              message: "检测到您之前使用过，请等待60秒",
              type: "warning",
              center: true
            });
        // this.$message.error("111");
      }else if(loclD !== null){
         this.$message({
              message: "检测到您之前使用过，请等待60秒",
              type: "warning",
              center: true
            });
      }else if(loclI !== null){
         this.$message({
              message: "检测到您之前使用过，请等待120秒",
              type: "warning",
              center: true
            });
      }else if(loclO !== null){
         this.$message({
              message: "检测到您之前使用过，请等待120秒",
              type: "warning",
              center: true
            });
      }
    }
  },
  computed: {
    ...mapMutations([]),
    ...mapGetters([]),
    ...mapState(["userId", "nickname", "level", "listenSongs", "signature"])
  },
  created() {
    // this.$store.commit('setUserInfo');
    this.loginStatus();
    this.$store.commit("getInfo");
    this.getQ();
    this.getD();
    this.getI();
    this.getO();
    this.weTost();
  }
};
</script>

<style>
.test {
  background-color: #000;
  margin-top: 120px;
}
.wapper-panl {
  height: 500px;
  margin-top: 120px;
  filter: blur(0.1px);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 25px;
  box-shadow: 12px 12px 30px rgba(48, 57, 82, 0.7);
}
.panl {
  text-align: center;
  border-radius: 25px 25px 0 0;
  color: rgba(225, 95, 65, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  white-space: nowrap;
}
.panl-button {
  width: 80%;
  text-align: center;
  margin-left: 10%;
  margin-top: 50px;
  height: 50px;
}

.song-button {
  width: 80%;
  text-align: center;
  margin-left: 10%;
  margin-top: 50px;
}
.logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 50%);
  height: 40px;
  box-shadow: 15px 15px 15px rgba(48, 57, 82, 0.7);
  border-radius: 5px;
}
.user-info {
  padding: 50px 35px 0 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    /* margin: 0; */
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
</style>