import React from 'react'
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'

export default function Cadastro({setLogado, setCadastro}) {

    const[ email,setEmail ] = useState("");
    const[ senha ,setSenha ] = useState("");

    function Cadastrar (){
        setCadastro(false);
        setLogado(false);
    }
    function Voltar() {
        setCadastro(false);
        setLogado(false);
    }


    return (
        <View style={css.view} >
            <TextInput style={css.inputs} 
            onChangeText={ (digitado) => setEmail(digitado )} 
            value={email}
            />
            <TextInput style={css.inputs}
            onChangeText={ (digitado) => setSenha(digitado )} 
            value={senha}
            />
            <TouchableOpacity onPress={Cadastrar}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Voltar}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}
const css = StyleSheet.create({
    view: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputs: {
        width: "90%",
        borderWidth: 1,
        marginTop: 25
    },
})