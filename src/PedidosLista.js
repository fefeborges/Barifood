import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function PedidosLista({titulo, subtotal, taxa, total, tempoentrega, setExibe }) {

  
    return(
        <View style={css.box}>  
          <Text style={css.titulo}>{titulo}</Text>
          <View style={css.box2}>
            <Text style={css.subtotal}>Subtotal</Text>       
            <Text style={css.subtotal2}>R${subtotal}</Text>
          </View>
          <View style={css.box2}>
            <Text style={css.cinza}>Taxa</Text>
            <Text style={css.cinza2}>R${taxa}</Text>
          </View>
          <View style={css.box2}>
            <Text style={css.total}>Total</Text>
            <Text style={css.total2}>R${total}</Text>
          </View>            
          <View style={css.box2}>
            <Text style={css.cinza3}>Tempo de Entrega</Text>
            <Text style={css.cinza4}>{tempoentrega}min</Text>
          </View>
          <TouchableOpacity onPress={() => setExibe( true )} style={css.compra} >
            <Text style={css.texto}>Rastrear Pedido</Text>
          </TouchableOpacity>
        </View>
    )
}
const css = StyleSheet.create({
    box:{
        backgroundColor: "white",
        alignSelf: "center",
        flexDirection: "column",
        width: "90%",
        justifyContent: "space-between",
        borderRadius: 10,
        borderWidth: 1,
        alignItems:"center",
        borderColor: "#5C0505",
        marginBottom: 35,    
      },
      titulo: {
        marginTop: 10,
        fontSize: 19,
        fontWeight: "500"
      },
      box2: {
        display: "flex",
        flexDirection: "row",
        marginTop: 15
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
        fontSize: 16,
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
        fontSize: 16,
      },
      cinza2: {
        width:"20%",
        color: "#A29D9D",
        marginBottom: 7,
        fontSize: 16
      },
      cinza3:{
        width:"70%",
        color: "#A29D9D",
        marginBottom: 7,
        fontSize: 16,
        borderTopWidth: 1,
        borderTopColor: "#8E0606",
        paddingTop: 12
      },
      cinza4: {
        width:"20%",
        color: "#A29D9D",
        marginBottom: 7,
        fontSize: 16,
        borderTopWidth: 1,
        borderTopColor: "#8E0606",
        paddingTop: 12
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
        marginBottom: 20
      },
      texto:{
          color:"#FFEFD9",
          textAlign:"center",
          fontSize: 15
      },
})
