<template>
    <div>
        <div class="form-wrapper">
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
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    },
    created() {

    }
}
</script>

<style>
.form-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    background-color: rgba(119, 139, 235,0.6);
    color: #fff;
    border-radius: 15px;
    padding: 50px;
}

.form-wrapper .header {
    text-align: center;
    font-size: 25px;
    line-height: 100px;
   color: #fff; 
}

.form-wrapper .input-wrapper input {
    background-color: rgb(160, 173, 236);
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
     background-color: #0e92b3;
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
</style>