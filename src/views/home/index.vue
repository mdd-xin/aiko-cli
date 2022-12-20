<!--  -->
<template>
  <div class="out_card">
    <div class="card_header">
      欢迎使用EZ，本工具仅限使用于已授权项目，否则一切后果自负。
    </div>
    <div class="card_body">
      <div class="main_body">
        <div class="card_row">
          <div class="col_four">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>漏洞总数</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins"> -->
                  <!-- <div id="VulnCount">0</div> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                  <!-- </h1> -->
                </div>
              </div>
            </div>
          </div>
          <div class="col_four">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>指纹总数</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_four">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>请求成功数</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_four">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>请求失败数</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_four">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>未处理数据包</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_four">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>已处理数据包</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_four">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>子域名收集Api未执行任务</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_four">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>子域名爆破未执行任务</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_five">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>子域名解析未执行任务</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_five">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>WebScan未执行任务</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_five">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>待处理结果数</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_five">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>端口收集API任务数</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_five">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>端口扫描任务数</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_five">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>服务探测任务数</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_four">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>指纹识别任务数</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_four">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>爬虫任务数</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_four">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>服务爆破任务数</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <div id="VulnCount">0</div>
                                    </h1> -->
                  <div>
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col_four">
            <div class="panel">
              <div class="panel_body">
                <div class="panel_title">
                  <h5>封锁主机数</h5>
                </div>
                <div class="panel_content">
                  <!-- <h1 class="no-margins">
                                        <a href="/blockHost" target="_blank" style="color: blue">
                                            <div id="BlockHost">0</div>
                                        </a>
                                    </h1> -->
                  <div class="block_host">
                    <IOdometer class="iOdometer" :value="num" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import IOdometer from "vue-odometer";
import "odometer/themes/odometer-theme-default.css";
export default {
  name:'MddHome',
  //import引入的组件需要注入到对象中才能使用
  components: {
    IOdometer,
  },
  data() {
    return {
      num: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    setInterval(function () {
      this.num += 1;
    }, 3000);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
/* @import url(); 引入公共css类 */
.out_card {
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  height: 450px;
}

.card_header {
  height: 42px;
  line-height: 42px;
  padding: 0 15px;
  border-bottom: 1px solid #f6f6f6;
  color: #333;
  border-radius: 2px 2px 0 0;
  font-size: 14px;
}

.card_body {
  padding: 10px 15px;
  line-height: 25px;
  height: 368px;
}

.main_body {
  width: 100%;
  height: 368px;
}

.card_row {
  margin: -5px;
}

.col_four {
  float: left;
  position: relative;
  display: block;
  box-sizing: border-box;
}

.col_five {
  float: left;
  position: relative;
  display: block;
  box-sizing: border-box;
}

.col_four {
  width: 25%;
}

.col_five {
  width: 16.66666667%;
}

.card_row > * {
  padding: 5px;
}

.panel {
  background-color: #f8f8f8;
  border: 1px solid transparent;
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.panel_body {
  padding: 10px;
}

.panel_title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 12px;
  color: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

a {
  text-decoration: none;
}

.odometer.odometer-theme-default {
  font-family: "Helvetica Neue", sans-serif;
  line-height: 1em;
  font-size: 2em;
}

.block_host {
  color: blue;
}
</style>
