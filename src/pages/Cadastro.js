import React,  {Component} from "react";
import { Link } from "react-router-dom";
import "../estilos/style.css"
import firebase from '../Firebase'

class Cadastro extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobreNome: "",
            dtNasc: ""
        }

        this.gravar = this.gravar.bind(this);
    }

    async gravar(){
        // firebase.firestore().collection("usuario").add({
        //     nome: this.state.nome,
        //     sobreNome: this.state.sobreNome
        // });

        // await firebase.firestore().collection("usuario").doc("1").set({
        //     nome: this.state.nome,
        //     sobreNome: this.state.sobreNome
        // })

        await firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.senha)
        .then(async (retorno)=>{
            
            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobreNome: this.state.sobreNome,
                dtNasc: this.state.dtNasc
            });
        }) 

    }
    
    render(){
        return(
            <div>
                <h1>Cadastro</h1>
                <input type="text" placeholder="E-mail" onChange={ (e) => this.setState({email: e.target.value})}/>
                <br/>
                <input type="password" placeholder="Senha" onChange={ (e) => this.setState({senha: e.target.value})}/>
                <br/>
                <input type="text" placeholder="Nome" onChange={ (e) => this.setState({nome: e.target.value})}/>
                <br/>
                <input type="text" placeholder="Sobre nome" onChange={ (e) => this.setState({sobreNome: e.target.value})}/>
                <br/>
                <input type="date" placeholder="Data de nascimento" onChange={ (e) => this.setState({dtNasc: e.target.value})}/>
                <br/>
                <button onClick={this.gravar}>Gravar</button>
                <br/>
                <Link to="/"><button>Pagina inicial</button></Link>
            </div>
        )
    }
}


export default Cadastro