import { View, Text, StyleSheet} from "react-native";

export default function Ajustes()
{
    return(
        <View style={css.container}>
            <Text style={css.titulo}>AJUSTES</Text>
            <View style={css.boxInfo}>
                <Text style={css.info}>Notificação </Text>
                <Text style={css.info}>Pagamentos</Text>
                <Text style={css.info}>Cupons</Text>
                <Text style={css.info}>Favoritos</Text>
                <Text style={css.info}>Endereços</Text>
                <Text style={css.info}>Dados da conta</Text>
            </View>
            <View style={css.boxInfo}>
                <Text style={css.info2}>Ajustes</Text>
                <Text style={css.info2}>Configurações</Text>
                <Text style={css.info2}>Segurança</Text>
                <Text style={css.info2}>Sugerir restaurantes</Text>
            </View>
        </View>
    )
     
}
const css = StyleSheet.create({
     titulo:{
        fontWeight: "500",
        fontSize: 20,
        color:"#5C0505",
        margin: 30,

     },
     boxInfo: {
        width: "90%",
        alignSelf: "center"
     },
     info:{
        fontSize: 20,
        marginTop: 10,
        margin: 5,
        color:"#5C0505",
        borderTopWidth: 1,
        borderColor: "#5C0505",
        paddingTop: 20,
        left:5,
        
     },
     info2:{
        fontSize: 20,
        left: 5,
        borderTopWidth:1,
        borderColor:"#A29D9D",
        color: "#A29D9D",
        top: 40,
        padding: 15
     },
     container: {
        height: "100%",
        backgroundColor:"#FFEFD9",
        alignItems: "center"

     }
     


})
