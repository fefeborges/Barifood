import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from "react-native";
import CardapioLista from "./CardapioLista";
import Header from "./components/Header";

const pratos = [
    {
        id: 1,
        imagem: require("../assets/bolil.png"), 
        nome: "BOLINHOS DE COSTELA",
        descricao: "Bolinhos de mandioca com costela, acompanha molho barbecue.",
        preco:"R$48.00",
        
    },
    {
        id: 2,
        imagem: require("../assets/franguinho.png"), 
        nome: "CHICKEN FINGERS HONEY MUSTARD",
        descricao: "Isca de frango com molho de mostarda e mel.",
        preco:"R$44.00",
    },
    {
        id: 3,
        imagem: require("../assets/camarão.png"), 
        nome: "CAMARÕES CROCANTE",
        descricao: "Camarões empanados em Farinha Panko crocante, acompanhados de um delicioso molho ranch da casa!",
        preco:"R$72.00",
    },
    {
        id: 4,
        imagem: require("../assets/batata.png"), 
        nome: "BATATAS RÚSTICAS DA VÓ MARIA",
        descricao: "Batatas rústicas com alecrim e pimenta do reino. Acompanham molho de alho.",
        preco:"R$35.00",
    },
    {
        id: 5,
        imagem: require("../assets/arani.png"), 
        nome: "ARANCINI",
        descricao: "Bolinhos de risoto com queijo parmesão acompanhados de pasta de tomate seco.",
        preco:"R$39.00",
    },
    {
        id: 6,
        imagem: require("../assets/panceta.png"), 
        nome: "PANCETA DA CASA",
        descricao: "Panceta suína frita em cubos, acompanha goiabada.",
        preco:"R$44.00",
    }

]

export default function Cardapio ()
{
    return(
        <View style={css.container}>
            <Header />
            <Text style={css.titulo}>ARMAZÉM D’VITTO - CARDÁPIO</Text>
            <View style={css.botao}>
                <TouchableOpacity style={css.btn}>
                    <Text style={css.texto2}>PRATOS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.btn}>
                    <Text style={css.texto2}>PORÇÕES</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.btn}>
                    <Text style={css.texto2}>BEBIDAS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.btn}>
                    <Text style={css.texto2}>DOCES</Text>
                </TouchableOpacity>
            </View>
            <View style={css.box}>
                <FlatList
                    data={pratos} renderItem={({ item }) => <CardapioLista imagem={item.imagem} nome={item.nome} descricao={item.descricao} preco={item.preco} />}
                    keyExtractor={(item) => item.id} />
            </View>
            <TouchableOpacity style={css.compra} >
                <Text style={css.texto}>Continuar Compra</Text>
            </TouchableOpacity>
        </View>
    )
}
const css = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"#FFEFD9",
        alignItems: "center",
    },
    titulo: {
        fontSize: 20,
        color: "#5C0505",
        marginLeft: 10,
        marginBottom: 10
    },
    box: {
        backgroundColor: "white",
        width: "90%",
        height: "65%",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#5C0505",
       
    },
    compra:{
        backgroundColor: "#8E0606",
        width: "90%",
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        marginTop: 20
    },
    texto:{
        color:"#FFEFD9",
        textAlign:"center",
        fontSize: 18
    },
    botao: {
        display:"flex",
        flexDirection:"row",
        alignItems: "center",
        
    },
    btn:{
        marginBottom: 20,
        backgroundColor: "#8E0606",
        width: "20%",
        height: 25,
        justifyContent: "space-between",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "black",
        marginTop: 5,
    },
    texto2:{
        color:"#FFEFD9",
        textAlign:"center",
        fontSize: 15
    }
    
})