import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import {useEffect, useState } from 'react'
import axios from 'axios';




export default function ListarClientes() {
  
  const [data, setData] = useState([])
  const getCustomers = async() =>{
    const response = await axios.get(`http://localhost:8080/buscarreservas`)
    setData(response.data.reserva)
    // console.log(data)
    }

    useEffect(()=>{
      getCustomers()
       //console.log(data)
    })




  const screenWidth = Dimensions.get('window').width;
  const cardWidth = screenWidth * 1.2; // 90% del ancho de la pantalla


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
		<View style={styles.container}>
		<Text style={styles.title}> </Text>
		<View style={styles.row}>
			{data.map((data, index) => (
			<View style={[styles.col, { width: cardWidth }]} key={index}>
        <View style={styles.container}>

        <Card style ={styles.card}>
          <Text  style={styles.title}>{data.nombre}</Text>
          <Text style={styles.description}>{data.apellido}</Text>
          <Text>
            <Text>Numero de persona: {data.numeroPersona}</Text>
          </Text>
          <Text style={styles.price}>{data.costoReserva}</Text>
        </Card>

        </View>
			</View>
			))}
		</View>
		</View>
	</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
	  backgroundColor:'#E9F1E4',
    alignItems: 'center',
    justifyContent: 'center',
	  margin: 10
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  col: {
    width: '65%',
    marginBottom: 10,
    marginTop: 10,
  },
  card: {
	  textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '45%',
    height: '95%',
    marginBottom: 10,
	  marginTop: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
	borderRadius: '8px',
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  icon: {
    fontSize: 20,
    marginRight: 5,
  },
  price: {
    fontWeight: 'bold',
    marginTop: 10,
  },
});

