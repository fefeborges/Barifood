import React from 'react'
import { useState } from 'react'
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import Header from './components/Header';


export default function Cadastro({ setLogado, setCadastro }) {

    const[ nome, setNome ] = useState("");
    const[ telefone, setTelefone ] = useState("");
    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");

    function Cadastrar() {
        if( nome!= "" && telefone!= "" && email != "" && senha != "" )
        setCadastro(false);
        setLogado(false);
    }
    function Voltar() {
        setCadastro(false);
        setLogado(false);
    }

  return (
    <View style={css.container}>
        <Header />
        <Text style={css.titulo}>CADASTRO</Text>
        <TextInput style={css.input} placeholder="Insira seu Nome" onChangeText={ (digitado) => setNome(digitado) } value={nome} TextInput={nome}/>
        <TextInput style={css.input} placeholder="Insira seu Email" onChangeText={ (digitado) => setEmail(digitado) } value={email} TextInput={email} />
        <TextInput style={css.input} placeholder="Insira seu Telefone" onChangeText={ (digitado) => setTelefone(digitado) } value={telefone} TextInput={telefone} />
        <TextInput style={css.input} placeholder="Insira sua Senha" onChangeText={ (digitado) => setSenha(digitado) } value={senha} TextInput={senha} secureTextEntry={true} />
        <TextInput style={css.input} placeholder="Confirme sua Senha" onChangeText={ (digitado) => setSenha(digitado) } value={senha} TextInput={senha} secureTextEntry={true} />
        <TouchableOpacity style={css.btn} onPress={Cadastrar}>
            <Text style={css.texto}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.btn} onPress={Voltar}>
            <Text style={css.texto}>Voltar</Text>
        </TouchableOpacity>
        <View style={css.footer}></View>
    </View>
  )
}

const css = StyleSheet.create({
    container: {
        backgroundColor: "#FFEFD9",
        height: "100%",
        alignItems: "center"
    },
    titulo: {
        fontSize: 20,
        color: "#5C0505",
        marginTop: 15,
        marginLeft: 10
    },
    input: {
        marginTop: 25,
        width: "80%",
        marginTop: 25,
        backgroundColor: "white",
        paddingLeft: 5,
        height: 50,
        borderWidth: 1,
        borderColor: "#5C0505",
        borderRadius: 7,
    },
    btn: {
        marginTop: 25,
        width: "80%",
        marginTop: 25,
        backgroundColor: "#5C0505",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
    },
    texto: {
        color: "#FFEFD9",
        fontSize: 18,
        textAlign: "center",
        top: 10
    },
    footer: {
        width: "100%",
        height: 70,
        backgroundColor:  "#5C0505",
        position: "absolute",
        bottom: 0
    }
})
