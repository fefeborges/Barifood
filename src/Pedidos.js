import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Header from "./components/Header";
import PedidosLista from './PedidosLista';

export default function Pedidos() {

  const pedidos = [ 
    {
      id: 1,
      subtotal:"116.00",
      taxa:"5.00",
      total:"121.00",
      tempoentrega:"55-60"
    },
    {
      id: 2,
      subtotal:"90.00",
      taxa:"3.00",
      total:"93.00",
      tempoentrega:"90"
    }
  ]

  return (
    <View style={css.container}>
      <Header />
      <Text style={css.titulo}>PEDIDOS</Text>    
      <FlatList
        data={pedidos} renderItem={({ item }) => <PedidosLista  subtotal={item.subtotal} taxa={item.taxa} total={item.total} tempoentrega={item.tempoentrega}/>}
        keyExtractor={(item) => item.id} />
    </View>
  )
}
const css = StyleSheet.create({
    container:{
      backgroundColor: "#FFEFD9",
      width: "100%",
      height: "100%",
      
    
    },
    titulo:{
      fontSize: 20,
      color: "#5C0505",
      marginLeft: 10,
      marginBottom: 10,
      textAlign: "center"
    },
    

})
