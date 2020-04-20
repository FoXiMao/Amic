<template>
  <div>
    <!-- logo -->
    <section>
      <el-row type="flex"  justify="center">
        <el-col  :xs="20" :sm="18" :md="12" :lg="12" :xl="12">
          <img class="logo" src="../assets/logo-header.png" alt />
        </el-col>
      </el-row>
    </section>
    <section>
      <el-row class="hidden-xs-only">
        <el-col  :span="9" :offset="3">
          <div class="wapper-panl">
            <el-card class="panl" shadow="always">{{this.nickname}},欢迎使用网易云音乐一键打卡程序</el-card>
            <div>
              <el-button @click="qiandao" class="panl-button" type="danger">签到</el-button>
            </div>
            <div>
              <el-button class="panl-button" @click="dialogVisible1 = true" type="danger">听歌打卡</el-button>
            </div>
            <div>
              <el-button
                @click="centerDialogVisible1 = true"
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
      <el-row type="flex"  justify="center">

        <el-col class="hidden-sm-and-up"  :span="18" >
          <div class="wapper-panl">
            <el-card class="panl" shadow="always">当前登陆用户:{{this.nickname}}</el-card>
            <div>
              <el-button @click="qiandao" class="panl-button" type="danger">签到</el-button>
            </div>
            <div>
              <el-button class="panl-button" @click="dialogVisible2 = true" type="danger">听歌打卡</el-button>
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
    <!-- <section>
      <el-row>
        <el-col :span="24">
          <div class="footer">Copyright©Citrons博客 | 技术栈=>Vue+Vuex+node | 湘ICP备18012872号</div>
        </el-col>
      </el-row>
    </section> -->
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
        <el-checkbox label="日推歌曲"></el-checkbox>
        <el-checkbox label="我喜欢的音乐"></el-checkbox>
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
      centerDialogVisible: false,
      centerDialogVisible1:false,
      checkList: ["日推歌曲", "我喜欢的音乐"],
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
      likeId:null//喜欢列表ID
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
      //不允许输入框为控股
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
                   this.$message({
              message: "登陆成功，欢迎使用网易云一键打卡",
              type: "success",
              center: true
            });
                }, 1000);
                this.loginButtonShow = false;
                this.loginOutShow = true;
                this.$store.commit("setLoginIn");
                this.$store.commit("getUserInfo");
                const user = [
                  {
                    password: this.password,
                    cellphone: this.cellphone
                  }
                ];
                localStorage.removeItem("userInfo")
                  localStorage.setItem("userInfo", JSON.stringify(user))
                  this.$store.commit('getLikeId')
                     this.$store.commit('loginRefresh')
                     this.centerDialogVisible = false
                      this.$store.commit('setCookies')
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
    //邮箱登陆
    // TODO

    qiandao:throttle(function() {
      this.$store.commit("login");
       this.$store.commit('loginRefresh')
            let locl = localStorage.getItem('userId')
            if(locl !==null){
      this.$axios.post("/daily_signin?type=0").then(res => {
     
          if (res.data.code === 200) {
            this.$message({
              message: "签到成功",
              type: "success",
              center: true
            });
          }
        })
        .catch(error => {
          if (error.request.status === 400) {
          console.log('哈哈哈哈哈哈，我就不提示你')
          } else if (error.request.status === 301) {
            this.$message.error("未登录");
          } else {
             this.$message("未知错误");
          }
        })
      
         this.$axios.post("/daily_signin?type=1")
        .then(res => {
        })
           }else{
           this.$message.error("未登录")
         }

    }),
    play(){
      this.$store.commit('login')
      this.dialogVisible1 = false
      this.palyList =[]
      if(this.checkList[0] === '日推歌曲' && this.checkList[1] === '我喜欢的音乐'){
       //获取每日推荐歌曲
       this.$axios.post('/recommend/songs').then(
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
          for(var i = 0;i <= 30;i++){
            let day = this.dayList[i].id 
            console.log(day)
            //  this.palyList.push(this.dayList[0].id)
          }
          
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
</style>