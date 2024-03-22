import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { useState } from "react";
import CompraLista from "./CompraLista";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from "react-native";

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

export default function Compra() {
    return (
        <View style={css.container}>
            <Text style={css.titulo}>COMPRA</Text>
            <View style={css.box}>
            <FlatList
                data={compra} renderItem={({ item }) => <CompraLista nome={item.nome} preco={item.preco} />}
                keyExtractor={(item) => item.id} />
            <Text style={css.cupom}>Cupom</Text>
            <TextInput style={css.inputcupom} placeholder="Insira um cupom" />
            <Text>Total:</Text>
            <Text>R$172.00</Text>
            </View> 
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFEFD9",
        alignItems: "center"
    },
    titulo: {
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
        top: 20
    },
    box: {
        backgroundColor: "white",
        width: "90%",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#5C0505",
        height: 600
    },
    inputcupom: {
        marginTop: 25,
        width: "50%",
        height: 35,
        borderWidth: 1,
        borderColor: "#5C0505",
        borderRadius: 5,
    },
    cupom: {
        fontSize: 18,
    }
})