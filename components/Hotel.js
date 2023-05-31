import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';


const RoomCard = ({ habitacion }) => (
  <View style={styles.container}>
	<Card style ={styles.card}>
    <Image source={{ uri: habitacion.foto[0]}} style={styles.image} />
    <Text style={styles.title}>{habitacion.nombre}</Text>
    <Text style={styles.description}>{habitacion.descripcion}</Text>
    <Text>
      <Text style={styles.icon}>x</Text>
      <Text>{habitacion.cantidadMaxima}</Text>
    </Text>
    <Text style={styles.price}>Price: {habitacion.precioNoche}</Text>
	</Card>
  </View>
);

export default function App() {
  const habitaciones = [
    {
      nombre: 'Dreamland Room',
      foto: ['https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/202104281339260.Nangu_Wildernesshotel_panoramalogcabin22.jpg?alt=media&token=1667bb68-93a0-4cfc-ba06-26e76693616a'],
      descripcion: 'Awesome room, neat and pretty nice location, snow forest view, queen size bed and little couch to rest',
      cantidadMaxima: 2,
      precioNoche: '$1100',
    },
    {
      nombre: 'Aurora Room',
      foto: ['https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/202106021524110.202104281347210.ildernesshotel_lakeinariaurorahut36.jpg?alt=media&token=321864c5-526d-459a-8441-0438a5a8b839'],
      descripcion: 'Also known as Aurora Hut, tiny place to enjoy and observe the northern lights, up to 2 people allowed',
      cantidadMaxima: 2,
      precioNoche: '$1300',
    },
    {
      nombre: 'Wildcat Room',
      foto: ['https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/202104281339100._Wildernesshotel_panoramalogcabin24.jpg?alt=media&token=c49b5bb7-1461-49a3-9bde-425d87cf3631'],
      descripcion: 'Luxury room with king size bed and private jacuzzi, desk, and chairs; up to 3 people allowed',
      cantidadMaxima: 3,
      precioNoche: '$2250',
    },
    {
      nombre: 'Nangu Room',
      foto: ['https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/lapland-hotels-sky-ounasvaara-northern-comfort-twin-4-1345x1345%2Cq%3D85.jpg?alt=media&token=2d59ae9f-6595-48d7-8d98-885d5a17bcdb'],
      descripcion: 'Beautiful room with double size bed, tiny desk, and one chair; up to 2 people allowed',
      cantidadMaxima: 2,
      precioNoche: '$1500',
    },
    {
      nombre: 'Nangu Room',
      foto: ['https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/lapland-hotels-sky-ounasvaara-northern-comfort-twin-4-1345x1345%2Cq%3D85.jpg?alt=media&token=2d59ae9f-6595-48d7-8d98-885d5a17bcdb'],
      descripcion: 'Beautiful room with double size bed, tiny desk, and one chair; up to 2 people allowed',
      cantidadMaxima: 2,
      precioNoche: '$1500',
    },
    {
      nombre: 'Nangu Room',
      foto: ['https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/lapland-hotels-sky-ounasvaara-northern-comfort-twin-4-1345x1345%2Cq%3D85.jpg?alt=media&token=2d59ae9f-6595-48d7-8d98-885d5a17bcdb'],
      descripcion: 'Beautiful room with double size bed, tiny desk, and one chair; up to 2 people allowed',
      cantidadMaxima: 2,
      precioNoche: '$1500',
    },
    // Agregar más habitaciones si es necesario
  ];

  const screenWidth = Dimensions.get('window').width;
  const cardWidth = screenWidth * 1.2; // 90% del ancho de la pantalla


  return (
	<ScrollView contentContainerStyle={styles.scrollViewContent}>
		<View style={styles.container}>
		<Text style={styles.title}> </Text>
		<View style={styles.row}>
			{habitaciones.map((habitacion, index) => (
			<View style={[styles.col, { width: cardWidth }]} key={index}>
				<RoomCard habitacion={habitacion} />
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