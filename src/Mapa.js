import { View, Text, StyleSheet, Image, Button, TouchableOpacity} from "react-native";
import Header from "./components/Header";

export default function Mapa({setExibe})
{
        return(
                <View style={css.container}>
                    <Header />
                    <TouchableOpacity style={css.voltar} onPress={ () => { setExibe( false ); } }>
                        <Text style={css.texto}>Voltar</Text>
                    </TouchableOpacity>
                    <Image style={css.imagem} source={require("../assets/mapa.png")} />
                    
                </View>
        )
}
const css = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    imagem: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    voltar: {
        backgroundColor: "#5C0505",
        borderWidth: 1,
        height: 35
    },
    texto: {
        alignSelf: "center",
        fontSize: 17,
        color:  "#FFEFD9",
        marginTop: 5
    }
})