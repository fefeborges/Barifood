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
        flex: 1,
    },
    nome: {
        fontSize: 18,
        marginTop: 15,
        marginLeft: 10
    },
    preco: {
        fontSize: 18,
    },
    box: {
        borderBottomWidth: 1,
    }
})
