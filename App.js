import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import React from 'react';


import Home from './src/Home';
import Ajustes from './src/Ajustes';
import Cardapio from './src/Cardapio';
import Login from "./src/Login"
import Compra from './src/Compra';
import Cadastro from './src/Cadastro';
import Pedidos from './src/Pedidos';
import Mapa from './src/Mapa';

const Tab = createBottomTabNavigator();

export default function App() {

  const [logado, setLogado] = useState(false);
  const [cadastro, setCadastro] = useState(false);

  if (logado == false) {
    return (<Login setLogado={setLogado} setCadastro={setCadastro} />)
  }
  if (cadastro) {
    return (<Cadastro setCadastro={setCadastro} setLogado={setLogado} />)
  }


  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        tabBarStyle: { backgroundColor: "#5C0505", height: 70},
        headerStyle: { backgroundColor: "#5C0505" },
        headerTitleStyle: { color: "white" },
        tabBarActiveTintColor: "#FFEFD9",
        tabBarInactiveTintColor: "#848483",
        headerShown: false
      }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='home' color={color} size={40} />
            ),
          }}
        />
        <Tab.Screen
        name="Cardapio"
        component={Cardapio}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='silverware-variant' color={color} size={40} />),
        }}
      />
        <Tab.Screen
          name="Pedidos"
          component={Pedidos}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='cart' color={color} size={35} />),
          }}
        />
        <Tab.Screen
          name="Compra"
          component={Compra}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='wallet-plus' color={color} size={35} />),
          }}
        />
        <Tab.Screen
          name="Ajustes"
          component={Ajustes}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='menu' color={color} size={40} />),
          }}
        />
         <Tab.Screen
          name="Mapa"
          component={Mapa}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='menu' color={color} size={40} />),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

