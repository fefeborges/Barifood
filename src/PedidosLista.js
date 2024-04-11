import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function PedidosLista({subtotal, taxa, total, tempoentrega}) {
    return(
        <View style={css.box}>  
            <Text style={css.subtotal}>Subtotal</Text>       
            <Text style={css.subtotal2}>R${subtotal}</Text>
            <Text style={css.cinza}>Taxa</Text>
            <Text style={css.cinza2}>R${taxa}</Text>
            <Text style={css.total}>Total</Text>
            <Text style={css.total2}>R${total}</Text>
            <Text style={css.cinza}>Tempo de Entrega</Text>
            <Text style={css.cinza2}>{tempoentrega}min</Text>
            <TouchableOpacity style={css.compra} >
              <Text style={css.texto}>Rastrear Pedido</Text>
            </TouchableOpacity>
        </View>
    )
}
const css = StyleSheet.create({
    box:{
        backgroundColor: "white",
        display: "flex",
        alignSelf: "center",
        flexDirection: "column",
        width: "90%",
        justifyContent: "space-between",
        borderRadius: 10,
        borderWidth: 1,
        alignItems:"center",
        borderColor: "#5C0505",
        marginBottom: 35
      },
      info:{
        top:15,
        flex: 1,
        flexWrap: "wrap",
        width: "95%"
      },
      subtotal:{
        width:"70%",
        marginBottom: 7,
        fontSize: 16
      },
      subtotal2: {
        width:"20%",
        marginBottom: 7,
        fontSize: 16
      },
      total:{
        fontSize:16,
        width:"70%",
        marginBottom: 7,
        color: "#5C0505"
      },
      total2: {
        width:"20%",
        marginBottom: 7,
        fontSize: 16,
        color: "#5C0505"
      },
      cinza:{
        width:"70%",
        color: "#A29D9D",
        marginBottom: 7,
        fontSize: 16
      },
      cinza2: {
        width:"20%",
        color: "#A29D9D",
        marginBottom: 7,
        fontSize: 16
      },
      compra:{
        backgroundColor: "#8E0606",
        width: "60%",
        height: 30,
        justifyContent: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "black",
        marginTop: 20,
        textAlign:"center",
        marginBottom: 10
      },
      texto:{
          color:"#FFEFD9",
          textAlign:"center",
          fontSize: 15
      },
})
