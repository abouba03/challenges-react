import React from "react";


export class Info extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            texte: ""
        }
    }
    handleInput=(event) =>{
        const val = event.target.value
        this.setState({
            texte: val
           })
        
    }


    render(){
        return(
            <div>
                <input 
                    type="text"
                    placeholder="Entrez votre nom"
                    value={this.state.texte}    
                    onChange={this.handleInput}
                />
                <p>Votre nomm est: {this.state.texte}</p>
                
            </div>   
        )
    }
    
}
