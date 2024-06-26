import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import CompraLista from "./CompraLista";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from "react-native";
import Header from "./components/Header";
import Dropdown from 'react-native-input-select';
import React from 'react';
import { Platform } from 'react-native';

const compra = [
    {
        id: 1,
        imagem: require("../assets/d'vitto.png"),
        titulo: "Armazém D'Vitto",
        nome: "Chicken Fingers Honey Mustard",
        preco: "R$44.00",
    },
    {
        id: 2,
        nome: "Camarão Crocante",
        preco: "R$72.00",
    },
]

export default function Compra({setExibe, setCompra, navigation }) {

    
    const [pagamento, setPagamento] = React.useState();

    function Select()
    {
        return (
            <Dropdown
              placeholder="Selecione"
              options={[
                { label: 'Dinheiro', value: 'D' },
                { label: 'Cartão de Débito', value: 'CD' },
                { label: 'Cartão de Crédito', value: 'CC' },
                { label: 'Pix', value: 'P' },
              ]}
              selectedValue={pagamento}
              onValueChange={(value) => setPagamento(value)}
              primaryColor={'green'}
            />
          );
    }
    return (
        <ScrollView contentContainerStyle={css.container}>
            <Header />
            
            <Text style={css.titulo}>COMPRA</Text>
            <View style={css.box}>
                <Image style={css.imagem} source={require("../assets/d'vitto.png")} />
                <Text style={css.restaurante}>Armazém D'Vitto</Text>
                {
                    compra.map( ( item ) => (
                        <CompraLista id={item.id} nome={item.nome} preco={item.preco} />
                    ))
                }
                <View style={css.boxCupom}>
                    <Text style={css.texto}>Cupom</Text>
                    <TextInput style={css.inputcupom} placeholder="Insira um cupom" />
                </View>
                <View style={css.boxTotal}>
                    <Text style={css.texto1}>Total:</Text>
                    <Text style={css.texto1}>R$116.00</Text>
                </View> 
                
                <View style={css.boxDebaixo}>
                    <View style={css.boxlabel} >
                        <Text style={css.label}>Endereço:</Text>
                    </View>
                    <TextInput style={css.inputEndereco} placeholder="Insira seu Endereço"/>
                    <View style={css.boxlabel}>
                        <Text style={css.label}>Forma de Pagamento:</Text>
                    </View>
                    <View style={css.select}>
                        <Select />
                    </View>
                </View>    
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Pedidos")} style={css.botao} setExibe={setExibe}>
                <Text style={css.texto2}>Finalizar Pedido</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.voltar} onPress={ () => { setExibe( false ); setCompra( false ); } }>
                <Text style={css.texto}>Voltar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#FFEFD9",
        alignItems: "center",
    },
    titulo: {
        fontWeight: "500",
        fontSize: 20,
        color: "#5C0505",
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 10
    },
    imagem: {
        width: "100%",
        height: 90,
        resizeMode: "contain",
        top: 20,
        marginBottom: 10
    },
    restaurante: {
        fontSize: 23,
        marginTop: 10,
        color: "#5C0505",
        fontWeight: "500"
    },
    box: {
        backgroundColor: "white",
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#5C0505",
    },
    inputcupom: {
        width: "50%",
        height: 40,
        borderWidth: 1.5,
        borderColor: "#5C0505",
        borderRadius: 7,
        padding: 10
    },
    boxCupom: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        marginTop: 1,
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.8,
        borderBottomColor: "#A29D9D"
    },
    boxTotal: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10
    },
    texto: {
        fontSize: 17,
        marginTop: 10,
        alignSelf: "center",
        marginTop: 6
    },
    texto1: {
        fontSize: 17,
        color: "#5C0505",
        fontWeight: "500"
    },
    inputEndereco: {
        width: "90%",
        height: 50,
        borderWidth: 1.5,
        borderColor: "#5C0505",
        borderRadius: 7,
        padding: 10,
        marginTop: 10
    },
    boxDebaixo: {
        width: "100%",
        alignItems: "center",
        marginBottom: 50
    },
    label: {
        fontSize: 17,
        marginTop: 10,
        fontWeight: "500",
    },
    boxlabel: {
        alignSelf: "flex-start",
        marginLeft: 20
    },
    botao: {
        marginTop: 20,
        width: "90%",
        marginTop: 25,
        backgroundColor: "#8E0606",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
    },
    voltar: {
        marginTop: 20,
        width: "40%",
        marginTop: 25,
        backgroundColor: "transparent",
        height: 40,
        borderWidth: 2,
        borderColor: "#5C0505",
        borderRadius: 10,
        marginBottom: 20
    },
    texto2: {
        color: "#FFEFD9",
        fontSize: 18,
        textAlign: "center",
        marginTop: 10,
    },
    select: {
        width: "90%",
        height: 40,
        marginTop: 10,
    }
})