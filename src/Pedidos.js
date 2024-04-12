import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Header from "./components/Header";
import PedidosLista from './PedidosLista';
import Mapa from "./Mapa";

export default function Pedidos({navigation}) 
{

  const pedidos = [ 
    {
      id: 1,
      titulo: "Armazém D'Vitto",
      subtotal:"116.00",
      taxa:"5.00",
      total:"121.00",
      tempoentrega:"55-60"
    },
    {
      id: 2,
      titulo: "Rooster",
      subtotal:"90.00",
      taxa:"3.00",
      total:"93.00",
      tempoentrega:"90"
    }
  ]

  const [ exibe, setExibe ] = useState(false);

  if( exibe ) {
      return( <Mapa setExibe={setExibe} />)
  }

  return (
    <View style={css.container}>
      <Header />
      <Text style={css.titulo}>PEDIDOS</Text>    
      <FlatList
        data={pedidos} renderItem={({ item }) => <PedidosLista titulo={item.titulo} subtotal={item.subtotal} taxa={item.taxa} total={item.total} tempoentrega={item.tempoentrega} setExibe={setExibe}/>}
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
      fontWeight: "500",
      fontSize: 20,
      color: "#5C0505",
      marginLeft: 10,
      marginBottom: 10,
      textAlign: "center",
      marginTop: 15
    },
    

})
