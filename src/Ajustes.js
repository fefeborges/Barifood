import { View, Text, StyleSheet, ScrollView} from "react-native";
import Header from "./components/Header";

export default function Ajustes()
{
        return(
            <ScrollView style={css.container}>
                <View style={css.container}>
                    <Header />
                    <View style={css.titulo}>
                        <Text style={css.titulo}>AJUSTES</Text>
                    </View>
                    <View style={css.boxInfo}>
                        <Text style={css.info}>Notificação </Text>
                        <Text style={css.info}>Pagamentos</Text>
                        <Text style={css.info}>Cupons</Text>
                        <Text style={css.info}>Favoritos</Text>
                        <Text style={css.info}>Endereços</Text>
                        <Text style={css.info}>Dados da conta</Text>
                    </View>
                    <View style={css.boxInfo2}>
                        <Text style={css.info2}>Ajustes</Text>
                        <Text style={css.info2}>Configurações</Text>
                        <Text style={css.info2}>Segurança</Text>
                        <Text style={css.info2}>Sugerir restaurantes</Text>
                    </View>
                </View>
            </ScrollView>
        ); 
}
const css = StyleSheet.create({
     titulo:{
        fontWeight: "500",
        textAlign: "center",
        fontSize: 20,
        color:"#5C0505"

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
     boxInfo2: {
        width: "90%",
        alignSelf: "center"
     },
     info2:{
        fontSize: 20,
        borderTopWidth:1,
        borderColor:"#A29D9D",
        color: "#A29D9D",
        top: 40,
        paddingTop: 20,
        paddingBottom: 20,
        left:5,
     },
     container: {
        flex: 1,
        height: "100%",
        backgroundColor:"#FFEFD9",


     }
     


})
