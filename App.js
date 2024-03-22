import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/Home';
import Ajustes from './src/Ajustes';
import Cardapio from './src/Cardapio';
import { useState } from 'react';
import Login from "./src/Login"
import Cadastro from './src/Cadastro';

const Tab = createBottomTabNavigator();

export default function App() {

  const [ logado, setLogado ] = useState(false);
  const [cadasto, setCadastro] = useState(false)

  if(!logado ){
    return (<Login setLogado={setLogado} setCadastro={setCadastro}/>)
  }

  if(cadasto){
    return (<Cadastro setCadastro={setCadastro} setLogado={setLogado}/>)
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' >
        <Tab.Screen name="Home" component={Home}  options={{ tabBarLabel:'Home', tabBarIcon:({ color, size}) => (<MaterialCommunityIcons name="home" color={color} size={size}/>)}} />
        <Tab.Screen name="Ajustes" component={Ajustes}  options={{tabBarLabel:'Ajustes', tabBarIcon:({ color, size}) => (<MaterialCommunityIcons name="table-of-contents" color={color} size={size}/>)}}/>
        <Tab.Screen name="Cardapio" component={Cardapio}  options={{tabBarLabel:'Cardapio', tabBarIcon:({ color, size}) => (<MaterialCommunityIcons name="table-of-contents" color={color} size={size}/>)}}/>
        {/*<Tab.Screen name="Pedidos" component={Pedidos}  options={{tabBarLabel:'Pedidos', tabBarIcon:({ color, size}) => (<MaterialCommunityIcons name="table-of-contents" color={color} size={size}/>)}}/>*/}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

