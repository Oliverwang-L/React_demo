import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header";
import View from "./components/view";
import State from "./components/state";
import MyComponent from "./components/MyComponent";
import LifeCycle from "./components/lifecycle";
// 根据flag的值渲染不同的提示信息
class App extends React.Component{
    //render是继承Component的渲染方法
    render() {
        const names = ["tom", "oliver", "smith"]
        const log = "nihao"
        const banner = [
            {
                "title":"我在爱尔兰",
                "content":"爱尔兰",
                "img":"http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner1.jpg"
            },
            {
                "title":"一个人的东京",
                "content":"东京是世界上第二大的城市",
                "img":"http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner2.jpg"
            },
            {
                "title":"普罗旺斯的梦",
                "content":"普罗旺斯位于法国东南部",
                "img":"http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner3.jpg"
            },
            {
                "title":"夏威夷",
                "content":"夏威夷位于北太平洋中",
                "img":"http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner2.jpg"
            }
            ]
        // 根据flag的值渲染不同的提示信息
        var flag = false;
        //return 试图结构在这里面写，可以直接被解析
        return (//只能有一个外围的标签
            <div>
                <Header title = "header1" name = {names}/>
                <Header title = "header2"/>
                <View />
                <State />
                <LifeCycle />
                <MyComponent />
                <ul>
                    {
                        names.map(function (ele){
                            return <li key={"index1"}>{ele}</li>
                        })
                    }
                </ul>
                {
                    flag ? <div>这就是数据</div> : <div>看官请等待</div>
                }
                <div>
                    <ul>
                        {
                            banner.map((ele) =>{
                                return(
                                    <li key={"index2"}>
                                        <h3>ele.title</h3>
                                        <img src={ele.img}/>
                                        <p>{ele.content}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

/**
 * 两个参数
 * 1. 组件/视图结构
 * 2. 要渲染的容器位置
 */
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
