> 一直对vue很感兴趣，最近使用vue2.0开发了高仿饿了么点餐系统来练练手，不得不说vue真是一个很不错的框架，但是也遇到过一些坑，在这里和大家分享一下

# 饿了么点餐系统

> vue2.0、vuex、vue-router、axios、webpack、eslint、better-scroll


## 演示 

<a href="https://simonzhangiter.github.io/VueDemo_Sell_Eleme" target=_blank>在线演示戳我</a>（请使用chrome开发者手机演示模式预览）

### 移动端演示
扫二维码在手机上查看效果更好

<img src="https://static.oschina.net/uploads/space/2017/0207/180535_4FSI_2493500.png" width="25%">


## 组件

- [x] 购物车
- [x] 购买物品小球飞入动画
- [x] 评价star组件
- [x] 商品添加、删除组件
- [x] 优惠图标组件
- [x] 目录、列表联动滚动
- [x] 画廊
- [x] 评论的是否满意和内容筛选
- [x] 商品列表页面
- [x] 店铺评价页面
- [x] 商家介绍页面
- [x] 优惠活动页面
- [x] 商品详情页面

## 构建

vue有自己的脚手架构建工具vue-cli,使用起来非常方便，使用webpack来集成各种开发便捷工具，比如：

- 代码热更新，修改代码之后网页无刷新改变，对前端开发来说非常的方便
- PostCss，再也不用去管兼容性的问题了，只针对chrome写css代码，会自动编译生成支持多款浏览器的css代码
- Eslint，统一代码风格，规避低级错误，对于有代码洁癖的人来说是绝对的好东西，不过有些地方的代码校验有时候也挺麻烦的-.-
- bable，ES2015出来已经有一段时间了，但是不少浏览器还没有兼容ES6.有了bable，放心使用ES6语法，它会自动转义成ES5语法。
- Stylus，类似于SASS/SCSS，但是可以不写{}和“：”，使用起来还是很方便的
- ...

除此之外，vue-cli已经使用node配置了一套本地服务器和安装命令等，本地运行和打包只需要一个命令就可以搞定，非常的方便

## 开发

vue非常好的融合了react的组件化思想和angular的指令思想。
一个vue的组件将HTML、CSS、JS代码写在一个文件里面，这样既方便编写，也方便管理和修改

### Axios

在vue1.x的时候，vue的官方推荐HTTP请求工具是vue-resource，但是在vue2.0的时候将推荐工具改成了axios。

使用方式都差不多，但需要注意的是：接口返回的res并不直接是返回的数据，而是经过axios本身处理过的json对象。真正的数据在res.data里：

```javascript
axios.get(url).then((res)=>{
  this.data = res.data
})
```

### Vuex

vue提供了一个数据管理工具vuex，有点类似于angular中factory和service，可以进行数据上的通信。
比如存储一些公共变量或者是不同组件间的数据处理等。

这个有一些高级用法在这里不细说，想要了解的可以去官方文档看，有中文版本。

```javascript
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
```

### Vue-Router

vue-router是vue的路由系统，可以用来创建单页应用。基本思想是在主页面中引入<router-view>标签，然后定义路由，把router挂在到app上，然后把各个子页面渲染到view里面。使用起来还是很方便的，
跳转页面只需要

```javascript
router.push('test')
```

### 获取元素节点

vue2.0废除了v-el指令，所有的节点指令修改为ref，然后通过ref来获取元素节点，如

```html
<div ref="testHook">test</div>
...js code
this.$ref.testHook
```

### 组件间的通信

一。如果是和子组件通信，则使用ref就可以实现，如：

```html
<test ref="testHook"></test>
...js code
this.$ref.testHook.add() //调用test子组件的add方法
```

二。使用emit来发送广播

vue2提供了一套广播机制，即一边发送广播，一边接收广播来执行相应操作。使用方法如下：

比如想要给test组件发送一个“相加”广播:

```javascript
export default {
  method:{
  	click(){
  	  Vue.$emit('add',{}) //第二个参数可作为传递数据传送到监听端口，不需要则传空对象
  	}
  }
}
```

那么test组件中就需要监听，在created方法里写

```javascript
export default {
  created(){
   Vue.$on('add',this.add)
  },
  method:{
  	add(){
  	  this.count++
  	}
  }
}
```


除了以上总结的这点小的知识点以外，还有很多vue的知识想要和大家分享，以后会陆续写出来，大家感兴趣的也可以来我的GitHub一起来写这个项目（觉得不错的给个star Hah）

## 安装步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## 项目截图

<img src="https://static.oschina.net/uploads/space/2017/0207/110250_3uWi_2493500.jpeg" width="40%"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://cloud.githubusercontent.com/assets/20501873/24188896/ff2c5910-0f1d-11e7-80c0-bc28fd84fe80.png" width="40%"/>

## 交流

欢迎热爱学习、忠于分享的胖友一起来交流

- QQ：745913574

- QQ群：149683643

- WeChat

<img src="https://p0.meituan.net/dpgroup/749d8a79cd0a9bbc4e25b2f474a398d91256770.png?" width="25%">

## 声明

本项目的设计资源来自<a href="https://coding.imooc.com/class/74.html" target=_blank>慕课网</a>，但慕课网采用的是vue1.0开发，本项目采用vue2.0重构，并且引入vuex、vue-router等插件，是我个人的练手项目，如有冒犯，还请海涵。
