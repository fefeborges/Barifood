import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home';
import Compra from './src/Compra';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import Login from './src/Login';
import Cadastro from './src/Cadastro';

const Tab = createBottomTabNavigator();

  export default function App() {

  const[ logado, setLogado ] = useState(false);
  const[ cadastro, setCadastro ] = useState(false);

    if( logado == false ) {
      return(<Login setLogado={setLogado} setCadastro={setCadastro}/>)
    }
    if( cadastro ) {
      return(<Cadastro setCadastro={setCadastro} setLogado={setLogado}/>)
    }


  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        tabBarStyle: { backgroundColor: "#5C0505" },
        headerStyle: { backgroundColor: "#5C0505" },
        headerTitleStyle: { color: "white" },
        tabBarActiveTintColor: "#848483",
        tabBarInactiveTintColor: "#FFEFD9",
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
        <Tab.Screen name="Compra" component={Compra}  options={{tabBarLabel: '', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name='cart' color={color} size={40} />), }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

