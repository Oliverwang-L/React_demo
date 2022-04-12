import React from "react";
export default class Header extends React.Component{
    render(){
        const title = this.props.title
        const name = this.props.name || [1]
        console.log(name)
        return(
            <div>
                <h1>我是{title}</h1>
                <ul>
                    {
                        name.map((ele) => {
                            return(<li key={"name"}>{ele}</li>)
                        })
                    }
                </ul>
            </div>

        )
    }
}
