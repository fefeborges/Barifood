import React, { useState } from 'react'
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Cadastro from './Cadastro';

export default function Login({ setLogado, setCadastro }) {

    const[ email,setEmail ] = useState("");
    const[ senha ,setSenha ] = useState("");

    function Login()
    {
        Keyboard.dismiss();
        if(email == "livia@gmail.com" && senha == "1234") {
            setLogado( true );
        }
    }
    
    function Cadastrar (){
        setCadastro(true);
        setLogado(true);
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
        <TouchableOpacity  onPress={Login}>
            <Text>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={Cadastrar}>
            <Text>Cadastrar</Text>
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
