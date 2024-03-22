import React from 'react'
import { useState } from 'react'
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native'


export default function Cadastro({ setLogado, setCadastro }) {

    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");

    function Cadastrar() {
        setCadastro(false);
        setLogado(false);
    }
    function Voltar() {
        setCadastro(false);
        setLogado(false);
    }

  return (
    <View style={css.container}>
        <Text style={css.titulo}>CADASTRO</Text>
        <TextInput style={css.input} placeholder="Insira seu Nome" />
        <TextInput style={css.input} placeholder="Insira seu Email" onChangeText={ (digitado) => setEmail(digitado) } value={email} TextInput={email} />
        <TextInput style={css.input} placeholder="Insira seu Telefone" />
        <TextInput style={css.input} placeholder="Insira sua Senha" onChangeText={ (digitado) => setSenha(digitado) } value={senha} TextInput={senha} secureTextEntry={true} />
        <TextInput style={css.input} placeholder="Confirme sua Senha" onChangeText={ (digitado) => setSenha(digitado) } value={senha} TextInput={senha} secureTextEntry={true} />
        <TouchableOpacity style={css.btn} onPress={Cadastrar}>
            <Text style={css.texto}>Entrar</Text>
        </TouchableOpacity>
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
    }
})