<template>
    <div>
      <!-- logo -->
      <section>
        <el-row>
          <el-col class="hidden-xs-only" :span="12" :offset="6"><img class="logo" src="../assets/logo-header.png" alt=""></el-col>
        </el-row>
      </section>
      <section>
        <el-row>
          <el-col  :span="9" :offset="3">
            <div class="wapper-panl">
            <el-card class="panl" shadow="always">
                Citrons,欢迎使用网易云音乐一键打卡程序 <el-button type="text" @click="dialogVisible = true">About AMCI</el-button>
       </el-card>
       <div>
         <el-button class="panl-button" type="danger">签到</el-button>
         </div>
         <div>
           <el-button class="panl-button" @click="dialogVisible1 = true" type="danger">听歌打卡</el-button>
           </div>
           <div>
           <el-button class="panl-button" type="danger">登陆</el-button>
           </div>
           <br>
          <el-divider ></el-divider>
     <center><span> 我们的一生，终究是孤独的</span></center> 
       </div>
       </el-col>
          <el-col  :span="7" :offset="2">
            <div class="wapper-panl">
               <el-card class="panl" shadow="always">
                当前登陆用户信息
       </el-card>
       <div class="user-info">
       userId：374187305
          <el-divider></el-divider>
       昵称：Citrons柠檬草
          <el-divider></el-divider>
       等级：8
          <el-divider></el-divider>
       听歌数量：3339
          <el-divider></el-divider>
       个性签名：不知道你的人，还以为你很开心哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇 
         <el-divider></el-divider>
       </div>
              </div>
              
              </el-col>
        </el-row>
      </section>
      <section>
        <el-row>
  <el-col :span="24"><div class="footer">Copyright©Citrons博客  |  技术栈=>Vue+Vuex+node | 湘ICP备18012872号</div></el-col>
</el-row>
      </section>
        <el-dialog
  title="About AMIC"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>Q:我的账号安全吗？</span><br>
  <span>A:我们没有储存您的密码，非常安全</span>
  <el-divider></el-divider>
 <span>Q:这个程序是干嘛的？</span><br>
  <span>A:网易云一键签到，一键听满300首歌，刷等级</span>
  <el-divider></el-divider>
 <span>Q:会改变我的听歌风格吗？</span><br>
  <span>A:不会，刷的是每日推荐或者你标记喜欢的歌曲</span>
  <el-divider></el-divider>
  <span>Q:为什么只刷了一部分或者没刷</span><br>
  <span>A:网易云数据一般下午两点更新</span>
  <el-divider></el-divider>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
<el-dialog
  title="选择播放内容"
  :visible.sync="dialogVisible1"
  width="30%"
  :before-close="handleClose1">
   <el-checkbox-group v-model="checkList">
     <el-checkbox label="每日推荐"></el-checkbox>
    <el-checkbox label="我喜欢的音乐"></el-checkbox>
  </el-checkbox-group>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
  </span>
</el-dialog>
<!-- 遮罩层 -->
<div class="modal" style="display: none;">
       <div class="form-wrapper">
         <div class="close-login"><img src="../assets/close.png" alt=""></div>
    <div class="header">
      登陆网易云音乐
    </div>
    <div class="input-wrapper">
      <div class="border-wrapper">
        <input type="text" name="username" placeholder="手机号码/绑定邮箱" class="border-item">
      </div>
      <div class="border-wrapper">
        <input type="password" name="password" placeholder="请输入密码..." class="border-item">
      </div>
    </div>
    <div class="action">
      <div class="btn">login</div>
    </div>
  </div>

</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
 dialogVisible: false,
 dialogVisible1:false,
 checkList: ['选中且禁用','复选框 A'],
        }
    },
    methods: {
 handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
       handleClose1(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
    computed: {

    },
    created() {

    }
}
</script>

<style>
.test{
  background-color: #000;
  margin-top: 120px;
}
.wapper-panl{
  height: 500px;
  margin-top: 120px;
	filter: blur(0.1px);
 background-color:  rgba(255, 255, 255,0.7);
 border-radius: 25px;
 box-shadow: 12px 12px 30px rgba(48, 57, 82,0.7);
}
.panl{
 text-align: center;
 border-radius:25px 25px 0 0;
 color: rgba(225, 95, 65,1.0);
}
.panl-button{
  width: 80%;
  text-align: center;
  margin-left: 10%;
  margin-top: 50px;
  height: 50px;
}
.song-button{
  width: 80%;
  text-align: center;
  margin-left: 10%;
  margin-top: 50px;
}
.logo{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,50%);
  height: 50px;
}
.user-info{
  padding: 50px  35px 0 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.footer{
  text-align: center;
  color: #000;
  font-size: 16px;
  margin-top: 100px;
}
.modal{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0,0.5);
}
.form-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    background-color: rgba(255, 255, 255,0.7);
    color: #000;
    border-radius: 15px;
    padding: 50px;
}

.form-wrapper .header {
    text-align: center;
    font-size: 25px;
    line-height: 100px;
   color: #000; 
}

.form-wrapper .input-wrapper input {
    background-color: rgba(255, 255, 255,0.7);
    border: 0;
    width: 100%;
    text-align: center;
    font-size: 15px;
    color: #fff;
    outline: none;
}
.form-wrapper .input-wrapper input::placeholder {
    text-transform: uppercase;
}

.form-wrapper .input-wrapper .border-wrapper {
    background-image: linear-gradient(to right,#e8198b,#0eb4dd);
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-wrapper .input-wrapper .border-wrapper .border-item {
    height: calc(100% - 4px);
    width: calc(100% - 4px);
    border-radius: 30px;
}
.form-wrapper .action {
    display: flex;
    justify-content: center;
}
.form-wrapper .action .btn {
    width: 60%;
    text-transform: uppercase;
    border: 2px solid #0e92b3;
    text-align: center;
    line-height: 50px;
    border-radius: 30px;
    cursor: pointer;
    transition: .4s;
}

.form-wrapper .action .btn:hover{
    /* background-image: linear-gradient(to right,#0e92b3,#0eb4dd); */
    background-color: rgba(99, 205, 218,0.6);
}

.form-wrapper .icon-wrapper {
    text-align: center;
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
    border-top: 1px dashed rgb(146, 146, 146);
    padding: 20px;
}

.form-wrapper .icon-wrapper i {
    font-size: 20px;
    color: rgb(187, 187, 187);
    cursor: pointer;
    border: 1px solid #fff;
    padding: 5px;
    border-radius: 20px;
}
.close-login{
  position: fixed;
  top: -8px;
  right: -8px;
}
.close-login img{
  width: 20px;
  height: 20px;
}

</style>