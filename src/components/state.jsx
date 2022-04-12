import React from "react";

export default class State extends React.Component{
    constructor(props) {//props不写虽然不报错，但是需要从父类获得属性
        super(props);
        //状态：组件内部的数据,state中的状态发生变化，视图将会重新渲染
        this.state = {flag:true, name:["张三","李四","王五"]}
    }
    onClick(){
        this.setState({flag:!this.state.flag})
    }
    render(){
        const {flag, name} = this.state
        return(
            <div>
                <button onClick={this.onClick.bind(this)}>button</button>
                <h1>{flag ? "真" : "假的"}</h1>
                <ul>
                    {
                        name.map((ele) => {
                            return <li>{ele}</li>
                        })
                    }
                </ul>
            </div>
        )
}
}