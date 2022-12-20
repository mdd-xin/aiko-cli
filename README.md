# ez-front

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

——apis
——components
——layout
——router
——store
——styles
——utils
——views

tag:
布局左箭头,tags,右箭头,下拉
当刷新后 tag 只会保留 home 和当前页的 tag=>将整体存入 vuex,将当前页的 tag 存入 local
在路由守卫中做判断,如果跳转后的路径,存在于 list 中,则当前 tag 显示被选中(窗口移动到当前位置,tag 内状态呈被选中状态)
点击 tag 可以跳转至对应页面
右键快捷弹窗

思路:

创建 tag 类
——当前 tag 的位置,通过 x/margin-left 进行表示
——{
index:'', //索引
name:'',//名称
isActive:'' //是否被选中
x:'' //横坐标
path:'' //路径
click(){} //点击跳转事件
delet(){} //删除=>将该条从列表中删除
}

在路由守卫中路由跳转前进行判断,即将跳转页面是否存在于 list 中
——有,跳转,将 tag 状态进行改变
——没有,实例化创建,添加到 list 末尾处

---

##### TODO

1. 在 vue 中配置 webpack

   - **实现目标**:在每个页面中不再手动引用 valibale.scss 和 mixin.scss 两个文件,通过配置 webpack 的方式实现自动引入

2. 在页面中自动注册组件

   - **实现目标**:不需要通过 components 注册组件

3. 封装组件

---

##### 待解决 Bug

- 菜单伸缩问题

* 直接读取 routes 变量报错问题

##### 功能点
+ 全局功能
* 全屏

+ 表格
* 动态表格
* 拖拽表格
* 内联编辑

+ excel
* excel上传(大文件上传下载=>断点续传=>进度显示)
* excel下载
* 导出zip

+ 组件
* 头像上传
* 返回顶部
* 触底更新

+ 功能联系
* 自定义指令