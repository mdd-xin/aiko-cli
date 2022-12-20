<template>
  <div>
    <el-popover placement="bottom" trigger="click">
      <div>
        <div class="mdd-row" v-for="(mdd,index) in AllData" :key="index">
          <span class="mdd-wrap">{{mdd.title}}</span>
          <span class="mdd-wrap mdd-normal" v-for="(mddChild,index) in mdd.child" :key="index">{{mddChild}}</span>
          
        </div>
      </div>
      <div slot="reference">
        <span class="mdd-wrap mdd-head">{{headInfo.title}}</span>
        <el-button size="small">共{{AllData.length}}条</el-button>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
    data(){
        return {
            AllData:[
                {
                    title:'OpenResty',
                    icon:'',
                    child:['web系统与应用','web服务器','OpenResty inc.'],
                },
                {
                    title:'Nginx',
                    icon:'',
                    child:['web系统与应用','web中间件','F5，inc'],
                },
                {
                    title:'Lua',
                    icon:'',
                    child:['开发与运维','软件开发工具包','开源'],
                },
                {
                    title:'Ant Design',
                    icon:'',
                    child:['开发与运维','软件开发工具包','阿里巴巴控股有限公司'],
                },
                {
                    title:'Baidu Analytics',
                    icon:'',
                    child:['开发与运维','Api接口管理平台','百度在线网络技术(北京)有限公司'],
                },
            ]
        }
    },
    computed:{
      headInfo(){
        return this.AllData?.[0];
      }
    }
};
</script>

<style lang="scss" scoped>
.mdd-wrap {
  padding:5px 7px;
  font-size: 12px;
  border-radius: 15px;
  margin-right: 5px;
}
.mdd-row:nth-child(n+2){
    margin-top: 10px;
}
.mdd-normal {
  border: 1px solid rgb(235, 235, 241);
}
.mdd-head {
  background-color: rgb(239, 239, 239);
  font-size: 12px;
  padding:7px 10px;
}
::v-deep .el-button{
    border-radius:15px;
    padding: 7px 12px;
}
</style>