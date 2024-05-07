import React, { Component } from "react";
import firebase from "../Firebase"

import "../estilos/style.css"

class Principal extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobreNome:"",
            dtNasc: ""
        }
    }

    async componentDidMount(){
        await firebase.auth().onAuthStateChanged(async(usuario)=> {
            if(usuario){
                var uid = usuario.uid;

                await firebase.firestore().collection("usuario").doc(uid).get()
                .then((retorno)=>{
                    this.setState({
                        nome: retorno.data().nome,
                        sobreNome: retorno.data().sobreNome,
                        dtNasc: retorno.data().dtNasc
                    });
                });
            }
        });
    }

    render(){
        return(
            <div>
                Nome:{this.state.nome}<br/>
                Sobre Nome:{this.state.sobreNome}
                Data de nascimento: {this.state.dtNasc}

            </div>
        )
    }
}

export default Principal;