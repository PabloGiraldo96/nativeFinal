import { View, Text, TouchableOpacity  } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import styles from '../assets/styles.js'

const ListarClientes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido </Text>
      <Text style={styles.phrase}> Aquí van los clientes a listar</Text>
      <Text style={styles.phrase}> Falta la conexion al backend con Axios (Consumo de API) </Text>
      <Text style={styles.phrase}> Falta agregar animaciones con Lottie-React-Native</Text>
    </View>
  );
};


export default ListarClientes