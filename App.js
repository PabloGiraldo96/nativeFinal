import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity  } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import styles from './assets/styles.js'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hotel from './components/Hotel.js'
import RegistroUsuario from './components/RegistroUsuario.js';
import ListarClientes from './components/ListarClientes.js';


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


export const users = []

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

// Funcion para ir al screen RegistroUsuario

  const handleRegister = () => {
    navigation.navigate('Registro Usuario');
  };
// Funcion de comparar el usuario ingresado con el usuario del arreglo

  let findUser = users.find(user => user.username == username && user.password == password);

// Funcion para entrar al Home de la aplicación; carros disponibles. 

  const handleLogin = () => {

  const nameRegex = /^[A-Za-z]+$/; // Expresión regular para validar solo letras
  const passwordRegex = /^[A-Za-z0-9]+$/; // Expresión regular para validar letras y números
  let isValidName = nameRegex.test(username);
  let isValidPassword = passwordRegex.test(password);

if(findUser != "" && isValidName != "" && isValidPassword !=""){
  if (findUser != undefined){
      if(isValidPassword){
            navigation.navigate('Home');
            setUsername('');
            setPassword('');
          }else {setError('Usuario o contraseña inválidos')}
    } else {setError('Usuario no existe')}
  } else{setError('Debe ingresar todos los campos') }
};

// Funcion limpiar campos

	let limpiarCampos = () => {
	setUsername('');
	setPassword('');
	setError('')
}

  return (
    <View style={styles.container}>
      
      <Card style={styles.card}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <TextInput
          style={styles.textInput}
          label="Nombre de usuario"
          mode='outlined'
          value={username}
          onChangeText={username => setUsername(username)}
        />
        <TextInput
          style={styles.textInput}
          label="Contraseña"
          mode='outlined'
          value={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry
        />
        {/*operador Ternario con native */}
        {error ?
         <Text style={styles.error}>{error}</Text> : 
          null}
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Ingresar
          </Button>
        <Button mode="contained" onPress={limpiarCampos} style={styles.button}>
          Limpiar Datos
        </Button>
        </Card>
            <TouchableOpacity >
         <Text style = {styles.phrase} onPress={handleRegister}>No tienes cuenta? Regístrate! </Text>
      </TouchableOpacity>
    </View>
  );
};



const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" 
        component={Login} />
      <Stack.Screen name="Home" 
        component={Hotel} />
      <Stack.Screen name="Registro Usuario" 
        component={RegistroUsuario} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};



//const Hotel = () => {
//  return (
//    <View style={styles.container}>
//      <Text style={styles.title}>Bienvenido </Text>
//      <Text style={styles.phrase}>Conoce los hoteles que tenemos .</Text>
//    </View>
//  );
//};




const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Login" component={MainStackNavigator} options={{headerShown:false
        }}/>
        <BottomTab.Screen name="Hotel" component={Hotel} />
        <BottomTab.Screen name="Lista de clientes" component={ListarClientes} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App; 