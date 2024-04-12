import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function RestaurantesLista({imagem, nome, descricao, avaliacao, setExibe}) {
    return(
        <TouchableOpacity onPress={ () => setExibe( true ) } style={css.container}>
            <Image source={imagem} style={css.imagem}/>
            <Text style={css.nome}>{nome}</Text>
            <Text style={css.descricao}>{descricao}</Text>
            <Text style={css.avaliacao}>{avaliacao}</Text>
        </TouchableOpacity>
    )
}

const css = StyleSheet.create({
    container: {
        width: "100%",
        height: 190,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#5C0505",
    },
    imagem: {
        width: "100%",
        height: 60,
        resizeMode: "contain",
    },
    nome: {
        fontSize: 18,
        color: "black",
        textAlign: "center",
        fontWeight: "500",
    },
    descricao: {
        fontSize: 13,
        color: "#A29D9D",
    },
    avaliacao: {
        fontSize: 16,
        color: "#A29D9D",
        top: 20
    },
})