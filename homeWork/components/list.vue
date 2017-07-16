<template>
    <div>
        <header class="PB-bg">
            <div class="main">
                <ul>
                    <li @click="changePage()"><router-link to="/list/home">Home</router-link></li>
                    <li @click="changePage()"><router-link to="/list/dashBoards">DashBoards</router-link></li>
                </ul>
                <div class="out">
                    <p @click="showLogOut">{{username}}<span></span></p>
                    <p v-show="isShowOut" @click="logOut">Logout</p>
                </div>
                <p>{{this.page}}</p>
            </div>
        </header>
        <router-view class="content"></router-view>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                page:'Home',
                username:sessionStorage.userId,
                isShowOut:false
            }
        },
        methods:{
            changePage(){
                let hash=location.href.split("#")[1]
                console.log(hash)
                if(hash.indexOf("home")>-1){
                    this.page="Home"
                }
                if(hash.indexOf("dashBoards")>-1){
                    this.page="DashBoards"
                }
            },
            showLogOut(){
                this.isShowOut=!this.isShowOut
            },
            logOut(){
                sessionStorage.userId=null
                sessionStorage.psw=null
                location.href="/"
            }
        },

        mounted(){
            this.changePage()
            if(sessionStorage.userId=="null"||sessionStorage.userId=="undefined"){
                 this.logOut()
            }
        }
    }
</script>
<style scoped>
    header{
        padding: 20px 0;
    }
    header>.main{
        max-width: 1000px;
        margin: 0 auto;
    }
    .content{
        max-width: 1000px;
        margin: 0 auto;
        padding-top:25px;
        width: 100%;
        overflow: hidden;
    }
    .main>ul{display: inline-block;max-width: 600px;margin: 5px 0;width: 70%}
    .main>ul>li{float: left;margin-right: 50px}
    .main>.out{float: right;display: inline-block;position: relative;top:4px}
    .main>.out>p{cursor: pointer}
    .main>.out>p>span:after{
        content: "\25bc";
      font-size: 12px;
        margin-left: 5px;
    }
    .out>p:last-child{
        background: white;
        text-align: center;
        margin-top: 5px;
        padding: 5px 5px 10px 5px;
        position: absolute;
    }
    .out>p:hover{
        color: blue;
    }
</style>