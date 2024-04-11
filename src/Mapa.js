import { View, Text, StyleSheet, Image} from "react-native";
import Header from "./components/Header";

export default function Ajustes()
{
        return(
                <View style={css.container}>
                    <Header /> 
                    <Image style={css.imagem} source={require("../assets/mapa.png")} />
                </View>
        )
}
const css = StyleSheet.create({
    imagem: {
        

    }
})