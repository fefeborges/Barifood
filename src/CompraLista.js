import { Image, StyleSheet, Text, View } from "react-native";

export default function CompraLista({ id, nome, preco}) {
    return(
        <View style={css.container} key={id}>     
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
        marginTop: 10,
        marginBottom: 15,
        paddingBottom: 15,
        borderBottomWidth: 0.8,
        borderBottomColor: "#A29D9D"
    },
    nome: {
        fontSize: 17,
        width: "70%"
    },
    preco: {
        fontSize: 17,
        width: "20%"
    },
    box: {
        borderBottomWidth: 1,
    }
})
