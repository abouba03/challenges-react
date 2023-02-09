import React from "react";


export class Info extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 1
        }
    }
    handleClick =() =>{
        this.setState({
            count: this.state.count + 1
        })
    }


    render(){
        return(
            <div>
                <h1>BONJOUR, {this.props.name}</h1>
                <button onClick = {this.handleClick}>Click Me</button>
                <p> {this.state.count}</p>
            </div>   
        )
    }
    
}
