import { Image, StyleSheet, Text, View } from "react-native";

export default function CompraLista({nome, preco}) {
    return(
        <View style={css.container}>     
            <Text style={css.nome}>{nome}</Text>
            <Text style={css.preco}>{preco}</Text>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        width: "95%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 10,
        paddingBottom: 15,
        borderBottomWidth: 0.8
    },
    nome: {
        fontSize: 15,
        width: "70%"
    },
    preco: {
        fontSize: 15,
        width: "20%"
    },
    box: {
        borderBottomWidth: 1,
    }
})
