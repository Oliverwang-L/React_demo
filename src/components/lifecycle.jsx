import React from "react";

export default class LifeCycle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {message:"初始数据"}
    }
    //拦截函数，判断是否要加载state
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps")
        console.log(state)
        if(state.message == "初始数据"){
            console.log("数据没有问题")
        }
        return state
    }
    //加载结束
    componentDidMount() {
        /*
        ***网络请求，在加载渲染完之后再获取数据
         */
        console.log("componentDidMount")
        //加载完就可以改变数据了
        console.log(this.state)
    }
    //判断是否更新数据，返回true或false
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        /*
        **优化方法
        * 返回false的时候不允许视图重新渲染
        * A(B(C(D)))
        * A包含B...如果B组件重新渲染了，C、D组件也会重新渲染,有了这个函数C、D就不会渲染
         */
        console.log("shouldComponentUpdate")
        return true
    }
    //在渲染的时候获取更新之前的数据
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        console.log(prevState)
        return null
    }
    //渲染结束
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }
    //卸载前函数
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    dataChange(){
        this.setState({message:"更新之后的数据"})
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.dataChange.bind(this)}>改变值</button>
            </div>
        )
    }
}