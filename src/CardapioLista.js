import { Image, Text, View, StyleSheet } from "react-native";

export default function CardapioLista({imagem, nome, descricao, preco}) {
    return(
        <View style={css.container}>    
            <Image style={css.imagem} source={imagem}/>       
            <Text style={css.nome}>{nome}</Text>
            <Text style={css.descricao}>{descricao}</Text>
            <Text style={css.preco}>{preco}</Text>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imagem:{
        width:"100%",
        height: 100,
        resizeMode: "contain",
        top:20,
        
    },
    nome: {
        fontWeight:"500",
        top:25,
        fontSize:18
    },
    descricao:{
        marginTop:30,
        textAlign:"center",
        fontSize:16,
        color:"#A29D9D"
    },
    preco:{
        color:"#5C0505",
        marginTop:10,
        fontSize:19,
        
       
    }
})