import { View, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={css.header}>
        <Image style={css.imagem} source={ require( "../../assets/logo.png" ) } />
    </View>
  )
}
const css = StyleSheet.create({
    header: {
        width: "100%",
        height: 81,
        backgroundColor:  "#5C0505",
        marginBottom: 40
    },
    imagem: {
        width: 81,
        height: 81,
        resizeMode: "contain"
    }
})
