import { View, Text, TouchableOpacity, FlatList  } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import styles from '../assets/styles.js'
import { useState, useEffect } from 'react'
import axios from 'axios' 

const ListarClientes = () => {

  const [data, setData] = useState([]);

  const getClientes = async () => {
    try{
      const url = `https://node-viernes2023.vercel.app/buscarreservas`;
      const response = await axios.get(url);
      setData(response.data)
      console.log(response.data)
    }
    catch(error){
      console.log(error)
    }
    finally{
      //setLoading(false)
    }
  };

  useEffect(() => {
    getClientes();
  }, []) 

 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido </Text>
      <Text style={styles.phrase}> Listado de Clientes </Text>
      <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <Text>{item._id} - {item.nombre} - {item.apellidos}</Text>
        )}
      />
    </View>
  );
};


export default ListarClientes