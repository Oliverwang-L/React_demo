import React from "react";

export default class MyComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            count:0,
        }
    }
    Add(){
        /*
          setState：异步操作
         */
        this.setState({count:this.state.count += 1})
    }
    render(){
        const {count} = this.state
        return(
            <div>
                <h1>{count}</h1>
                <button onClick={this.Add.bind(this)}>增加1</button>
            </div>
        )
    }
}