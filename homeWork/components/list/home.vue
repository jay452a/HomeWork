<template>
   <div>
       <div class="main">
           <select class="type PB-bg" v-model="searchValue" @change="search">
               <option value="">Log Level</option>
               <option value="DEBUG">DEBUG</option>
               <option value="INFO">INFO</option>
               <option value="WARN">WARN</option>
               <option value="ERROR">ERROR</option>
               <option value="FATAL">FATAL</option>
           </select>
           <table  class="PB-color">
               <tr>
                   <th style="width: 20%">Time Stamp</th>
                   <th style="width: 10%">LogMarker</th>
                   <th style="width: 20%">Logger</th>
                   <th style="width: 10%">Log Level</th>
                   <th style="width: 20%">Current Thread</th>
                   <th style="width: 20%">Log Message</th>
               </tr>
               <tr v-for="list in listData">
                   <td>{{list.TimeStamp}}</td>
                   <td>{{list.LogMarker}}</td>
                   <td>{{list.Logger}}</td>
                   <td>{{list.LoginLevel}}</td>
                   <td>{{list.CurrentThread}}</td>
                   <td>{{list.LogMessage}}</td>
               </tr>
           </table>
       </div>

   </div>
</template>
<script>
   export default{
       data(){
           return{
               listData:[],
               searchValue:"",
               listDataAll:[]
           }
       },
       methods:{
           search(){ //选择下拉框查询列表
               let logLevel=this.searchValue
               let listData=this.listDataAll
               if(logLevel==""){
                   this.listData=this.listDataAll
                   return
               }
               let searchData=[]
               for(let i=0;i<listData.length;i++){
                   if(listData[i].LoginLevel==logLevel){
                       searchData.push(listData[i])
                   }
               }
               this.listData=searchData


           }
       },
       created(){
           let that=this
           this.$ajax.get("/json/listData.json")
                .then(function (res) {
                    if(res.status==200){
                        console.log(res.data)
                        that.listData=res.data
                        that.listDataAll=res.data
                    }
                })
       }
   }
</script>
<style scoped>
    .main{
        width: 100%;
        overflow: auto;
    }
    select.type{
        width: 100px;
        height: 30px;
        margin-right: 30px;
        margin-bottom: 15px;
    }
    select.type>option{
        background: white;
    }
    table{
        width: 800px;
        display: inline-block;
        vertical-align: text-top;
    }

    table tr td{
        padding: 15px;
        text-align: center;
        border-bottom: 1px solid #dcdcdc;
    }

</style>