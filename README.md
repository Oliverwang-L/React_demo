# 创建项目的步骤
 1. 脚手架（现代化工具链）
    npx create-react-app project-name
    在Pycharm中可以直接生成react的项目
 2. 运行项目
    cd 项目根目录（可以直接在Pycharm的terminal操作）
    yarn start/npm start
 3. 创建完项目之后一定要记得运行
 4. 入口文件index.js文件需要直接放在src文件夹下，不能放在里面的文件夹下


HTML：
<img src="" alt="">
XML(严格的HTML):
<img src="" alt="" />

JSX语法例子：
const log = "nihao"
<div>HelloWorld:{log}</div>
遇到标签结合解析成XML；遇到花括号解析成JS

组件的业务语句要写在render的外面，render里面写渲染语句
#render
render里面必须有一个return函数返回jsx元素，如果有多行语句必须有小括号括起来
return里面只能有一个最外层的jax元素，不能并列返回
jsx写函数表达式的时候还需要用()把函数包裹起来
{}可以放在标签的属性上，而且{}里面可以写任何js代码

#条件 渲染
在 React 中，你可以创建不同的组件来封装各种你需要的行为。
然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容。
- 第一种方法是用三目运算符
- 第二种方法是用函数if else

#列表渲染 & Key
列表渲染就是<ul><li></li></ul>,需要注意的是li标签里需要一个字符串作为标识符，否则会有警告

#组件 & Props
1. 编写javasc函数 function
2. 使用ES6 的class定义组件
我发现pycharm的react不能用第一种方式写组件，虽然不会报错，但是没有用

Props:组件之间的数据传递:class里写了接受某一个属性，但是组件声明的地方没有写是没有关系的，调用的时候会变成define

# state 
state是组件内自己数据的处理方案，所以每个组件的数据都可以保存在state里
this.state = {flag:true, name:"wanglin"} #定义state
this.setState({flag:!this.state.flag}) #删除state

#生命周期
生命周期分为三个阶段：
挂载时：组件渲染呈现在页面之上
更新时：UI上有变化
卸载时：跳转到其他页面，该页面被卸载
生命周期非常重要，最好能够直接背下来
-----------------------------
生命周期老版本：
componentWillMount：组件渲染之前执行
componentDidMount：组件渲染之后执行
componentWillupdate：组件更新之前执行
shouldComponentUpdate：判断是否需要改变状态，true/false
componentDidUpdate：组件更新之后执行
componentWillUnmount：组件卸载之前执行
-----------------------------
生命周期新版本：
componentDidMount：组件渲染之后执行
componentDidUpdate：组件更新之后执行
componentWillUnmount：组件卸载之前执行

shouldComponentUpdate：判断是否需要改变状态，true/false
static getDerivedStateFromProps(props,state)：拦截机制
在render之前调用，并且在初始挂载及后续更新时都会被调用。这个函数的作用在于state或者props更新
之前会先对数据进行检查，它应返回一个对象来更新state，如果返回null则不更新任何内容
！！！！需要注意的是在这个函数中不能使用this，因为这时候组件都还没加载完成，是没有this的
getSnapshotBeforeUpdate(prevProps, prevState)：拦截机制
在渲染更新之前获取之前的props和state的值，可以用来和新的值进行比较

# 严格模式
StrictMode 是一个用来突出显示应用程序中潜在问题的工具。与 Fragment 一样，StrictMode 不会渲染任何可见的 UI。它为其后代元素触发额外的检查和警告。
# Fragments
如果组件里需要返回多个节点，但是又不希望用<div></div>包裹起来，显然这是不被允许的。但是使用Fragments就可以做到<div></div>的效果，
而且它不会返回任何节点，只返回其内部节点。

