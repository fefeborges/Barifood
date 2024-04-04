import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, Keyboard, StyleSheet, Image } from 'react-native'

export default function Login({ setLogado, setCadastro }) {

    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");

    function Login()
    {
        Keyboard.dismiss();
        if( email == "fernanda@gmail.com" && senha == "1234" ) {
            setLogado(true);
        }
    }
    function Cadastrar() {
        setLogado(true);
        setCadastro(true);
    }

  return (
    <View style={css.container}>
        <View style={css.header}></View>
        <Text style={css.texto2}>Bem-vindo(a) ao Barifood, onde a comodidade encontra o sabor!</Text>
        <Image style={css.logo} source={require("../assets/logo redonda.png")} />
        <TextInput style={css.input} placeholder="Insira seu Email" onChangeText={ (digitado) => setEmail(digitado) } value={email} TextInput={email} />
        <TextInput style={css.input} placeholder="Insira sua Senha" onChangeText={ (digitado) => setSenha(digitado) } value={senha} TextInput={senha} secureTextEntry={true} />
        <TouchableOpacity style={css.btn} onPress={Login}>
            <Text style={css.texto}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.btn1} onPress={Cadastrar}>
            <Text style={css.texto1}>Cadastro</Text>
        </TouchableOpacity>
        <Text style={css.texto2}>Explore nosso menu diversificado e faça pedidos sem sair de casa.</Text>
        <View style={css.footer}></View>
    </View>
  )
}

const css = StyleSheet.create({
    container: {
        backgroundColor: "#FFEFD9",
        height: "100%",
        alignItems: "center",
    },
    input: {
        marginTop: 25,
        width: "80%",
        marginTop: 25,
        backgroundColor: "white",
        height: 50,
        borderWidth: 1,
        borderColor: "#5C0505",
        borderRadius: 7,
        padding: 7
    },
    btn: {
        marginTop: 25,
        width: "80%",
        marginTop: 25,
        backgroundColor: "#8E0606",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
    },
    btn1: {
        marginTop: 25,
        width: "80%",
        marginTop: 25,
        backgroundColor: "transparent",
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#8E0606",
    },
    texto: {
        color: "#FFEFD9",
        fontSize: 18,
        textAlign: "center",
        top: 10,
    },
    texto1: {
        color: "#5C0505",
        fontSize: 18,
        textAlign: "center",
        top: 10,
    },
    texto2: {
        fontSize: 18,
        textAlign: "center",
        top: 20
    },
    logo: {
        width: "100%",
        height: 130,
        resizeMode: "contain", 
        marginTop: 30,
        marginBottom: 20
    },
    header: {
        width: "100%",
        height: 81,
        backgroundColor:  "#5C0505",
        marginBottom: 40
    },
    footer: {
        width: "100%",
        height: 70,
        backgroundColor:  "#5C0505",
        position: "absolute",
        bottom: 0
    }
})
