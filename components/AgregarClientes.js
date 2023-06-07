import { View, Text, TouchableOpacity, FlatList  } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import styles from '../assets/styles.js'
import { useState, useEffect } from 'react'
import axios from 'axios' 
import { useForm, Controller } from 'react-hook-form';

function agregarClientes(){

  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState("")
  const [idSearch, setIdsearch] = useState("")

  const { control, handleSubmit, formState: { errors}, reset, setValue} = useForm({
    defaultValues:{
      firstName:'',
      lastName:'',
      phone:'',
      dateInicio:'',
      dateFinal:'',
      id:'',
      numero:''
    }
  })
  const onSave = async(data) =>{
    let idHabitacion = data.id;
    let nombre = data.firstName;
    let apellido = data.lastName;
    let telefono = data.phone;
    let fechaInicio = data.dateInicio;
    let fechaFinal = data.dateFinal;
    let numeroPersona = data.numero;
    const response = await axios.post(`https://test-api-lovat-alpha.vercel.app/registrarreserva`,{
      idHabitacion,
      nombre,
      apellido,
      telefono,
      fechaInicio,
      fechaFinal,
      numeroPersona
    })
    setIsError(false)
    setMessage("Cliente agregado correctamente")
    setTimeout(()=>{
      setMessage("")
    },2000)
    reset();
  }
  return(
    <View style={styles.container}>
    <Text>Actualización de Clientes</Text>

    <Controller
        control={control}

        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                label="Id Habitacion"
                mode="outlined"
                style={{ backgroundColor: 'powderblue' }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
        )}
        name="id"
    />

    <Controller
        control={control}

        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                label="Nombre Completo"
                mode="outlined"
                style={{ backgroundColor: 'powderblue' }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
        )}
        name="firstName"
    />


    <Controller
        control={control}

        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                label="Apellidos"
                mode="outlined"
                style={{ marginTop: 10 }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
        )}
        name="lastName"
    />

    <Controller
        control={control}

        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                label="Telefono"
                mode="outlined"
                style={{ marginTop: 10 }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
        )}
        name="phone"
    />

      <Controller
        control={control}

        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                label="Fecha Inicio"
                mode="outlined"
                style={{ marginTop: 10 }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
        )}
        name="dateInicio"
    />

      <Controller
        control={control}

        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                label="Fecha Final"
                mode="outlined"
                style={{ marginTop: 10 }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
        )}
        name="dateFinal"
    />

    <Controller
        control={control}

        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                label="Numero"
                mode="outlined"
                style={{ marginTop: 10 }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
        )}
        name="numero Personas"
    />

    <Text style={{color: isError ? 'red' : 'green'}}>{message}</Text>

    <View style={{ marginTop: 20, flexDirection: 'row' }}>

        <Button
            icon="content-save"
            mode="contained" onPress={handleSubmit(onSave)}>
            Guardar
        </Button>

    </View>
</View>
  )

}

export default agregarClientes;