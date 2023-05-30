import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#E9F1E4',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  phrase: {
    fontSize: 18,
    color: 'blue',
    marginTop: 25,
  },
  text: {
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  card: {
    backgroundColor:'#FFFFFF',
    width: '75%',
    padding: 10,
  },
  textInput:{
  marginTop: 5,
	marginBottom: 20,
},
  button:{
    marginTop: 20,
    textTransform: "uppercase",
    backgroundColor: '#499014',
    backdropFilter: blur('10px'),
    border: 'none',
    borderRadius: '10px',
    color: '#FFFFFF',
},
  mensaje: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});


export default styles;