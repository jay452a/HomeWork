<template>
    <section class="PB-bg">
        <div class="main">
            <div class="loginContent">
                <h1>Log In<img src="../src/img/password.png"></h1>
                <div class="formLine">
                    <label for="userId">User ID:</label>
                    <input type="text" id="userId" class="PB-input" v-model="userId" @focusin="focusUser"/>
                    <p class="PB-waring" v-show="userIdReg">Please enter the correct username,at least 6 bites</p>
                </div>
                <div class="formLine">
                    <label for="passWord">Password:</label>
                    <input type="password" id="passWord" class="PB-input" v-model="password" @focusin="focusPsw"/>
                    <p class="PB-waring" v-show="pswReg">Please enter the correct password,at least 6 bites</p>
                </div>
                <button class="PB-btn"type="button" @click="login()"><span>Log In</span></button>
            </div>
        </div>
    </section>
</template>
<script>
   export default{
       data(){
           return{
               userId:"",
               password:"",
               userIdReg:false,
               pswReg:false,
               reg:/^[a-zA-Z\d_]{6,}$/
           }
       },
       methods:{
           login(){
               let userId = this.userId;
               let psw = this.password;
               if(!this.reg.test(userId)){
                   this.userIdReg=true
               }
               if(!this.reg.test(psw)){
                   this.pswReg=true
                   return
               }
               this.$ajax.get('/json/logs.json')
                   .then(function (res) {
                       console.log(res);
                       if(res.status==200){
                           let data=res.data
                           let isLog=0
                           for(let i=0;i<data.length;i++){
                               if(data[i].userID==userId&&data[i].password==psw){
                                   isLog=isLog+1
                               }else{
                                   isLog=isLog+0
                               }
                           }
                           console.log(isLog)
                           if(isLog===1){
                              location.href="#/list"
                              sessionStorage.userId= userId
                              sessionStorage.psw=psw
                           }
                           if(isLog===0){
                               alert("false")
                           }
                       }
                   })
                   .catch(function (res) {
                       console.log(res);
                   });
           },
           focusUser(){
               this.userIdReg=false
           },
           focusPsw(){
               this.pswReg=false
           }
       }
   }
</script>
<style scoped>
    section{
        width: 100%;
        height: 100%;
    }
    .main{
        display: table;
        width: 90%;
        max-width: 600px;
        height: 100%;
        margin: 0 auto;
    }
    .loginContent{
        vertical-align: middle;
        display: table-cell;
    }
    .loginContent>h1{font-size: 20px;color: white}
    .loginContent>h1>img{width: 20px;margin-left: 5px}
    .formLine{margin-top: 30px}
    .formLine>label{color: white}
    .PB-btn>span:after{
        content: "\2192";
        margin-left: 5px;
    }
    .PB-btn{cursor: pointer}
</style>