import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from '../Firebase'

class Login extends Component{
    constructor (props){
        super(props);
        this.state={
            email: "",
            senha: ""
        }
    }

    async acessar(){
        // funcao para verificar se o usuario existe, autenticar ele para login 
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(()=>{
            window.location.href = "/principal";
        })
        .catch((erro)=>{
            
        })

    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <input type="text" placeholder="E-mail" onChange={ (e) => this.setState({email: e.target.value})}/>
                <br/>
                <input type="password" placeholder="senha" onChange={ (e) => this.setState({senha: e.target.value})}/>
                <br/>
                <button onClick={this.acessar}>Acessar</button>
                <br/>
                <Link to="/"><button>Pagina inicial</button></Link>
            </div>

        )
    }

}

export default Login;