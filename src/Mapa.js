import { View, Text, StyleSheet, Image, Button} from "react-native";
import Header from "./components/Header";

export default function Mapa({setExibe})
{
        return(
                <View style={css.container}>
                    <Header />
                    <Button title="voltar" onPress={ () => { setExibe( false ); } } />
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
    }
})