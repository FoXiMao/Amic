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
 background-color:  rgba(255, 2555, 255,0.7);
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

</style>