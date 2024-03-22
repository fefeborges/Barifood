import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import { useState } from "react";
import RestaurantesLista from "./RestaurantesLista";
import Header from "./components/Header";

const restaurantes = [
    {
        id: 1,
        imagem: require("../assets/d'vitto.png"),
        nome: "Armazém D'Vitto",
        descricao: "Bar & Restaurante",
        avaliacao: "4,9 ⭐⭐⭐⭐⭐",
    },
    {
        id: 2,
        imagem: require("../assets/steakhouse.png"),
        nome: "Steak House",
        descricao: "Restaurante",
        avaliacao: "4,8 ⭐⭐⭐⭐⭐",

    },
    {
        id: 3,
        imagem: require("../assets/japa.png"),
        nome: "Japa Sushi",
        descricao: "Restaurante Japonês",
        avaliacao: "4,4 ⭐⭐⭐⭐",

    },
    {
        id: 4,
        imagem: require("../assets/top burguer.png"),
        nome: "Top Burguer",
        descricao: "Hamburgueria",
        avaliacao: "4,9 ⭐⭐⭐⭐⭐",
    },
    {
        id: 5,
        imagem: require("../assets/vecchia.png"),
        nome: "Casa Vecchia",
        descricao: "Restaurante",
        avaliacao: "4,8 ⭐⭐⭐⭐⭐",
    },
    {
        id: 6,
        imagem: require("../assets/rooster.png"),
        nome: "Rooster",
        descricao: "Lanches e Porções",
        avaliacao: "4,8 ⭐⭐⭐⭐⭐",
    },
    {
        id: 7,
        imagem: require("../assets/iracema.png"),
        nome: "Iracema Lanches",
        descricao: "Lanchonete",
        avaliacao: "4,8 ⭐⭐⭐⭐⭐",
    },
    {
        id: 8,
        imagem: require("../assets/burgman.png"),
        nome: "Burgman",
        descricao: "Lanches e Pastéis",
        avaliacao: "4,8 ⭐⭐⭐⭐⭐",
    },
]

export default function Home() {
    return (
        <View style={css.container}>
            <Header />
            <Text style={css.titulo}>RESTAURANTES</Text>
            <FlatList
                data={restaurantes} renderItem={({ item }) => <RestaurantesLista imagem={item.imagem} nome={item.nome} descricao={item.descricao} avaliacao={item.avaliacao} />}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    width: "50%",
                    padding: 10,
                    gap: 20
                }} numColumns={2} />
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFEFD9"
    },
    titulo: {
        fontSize: 20,
        color: "#5C0505",
        marginTop: 15,
        marginLeft: 10
    },
})