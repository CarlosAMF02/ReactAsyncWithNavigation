import React, {useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import { User } from '../Models/User'

export default function UserForm(props) {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telNumber, setTelNumber] = useState('')
  const [address, setAddress] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const validateUser = () => {
      if(name=='' || email=='' || telNumber=='' || address=='' || district=='' || city=='' || state=='') {
        alert("Insira os dados solicitados")
        return false
      }
      return true
  }

  const saveData = () => {
    if (validateUser()) { 
      const user = new User(name, email, telNumber, address, district, city, state)
      props.navigation.navigate('Confirmar Dados', { user })
    }
  }

  return (
    <SafeAreaView>
      <View style={ estilos.page }>
        <TextInput style={ estilos.input }
          onChangeText={(text)=> setName(text)} 
          placeholder='Nome'/>
        <TextInput style={ estilos.input } 
          onChangeText={(text)=> setEmail(text)} 
          placeholder='E-mail'/>
        <TextInput style={ estilos.input } 
          onChangeText={(text)=> setTelNumber(text)}
          placeholder='Telefone com DDD'/>
        <TextInput style={ estilos.input }  
          onChangeText={(text)=> setAddress(text)}
          placeholder='Endereço'/>
        <TextInput style={ estilos.input } 
          onChangeText={(text)=> setDistrict(text)} 
          placeholder='Bairro'/>
        <TextInput style={ estilos.input }  
          onChangeText={(text)=> setCity(text)}
          placeholder='Cidade'/>
        <TextInput style={ estilos.input } 
          onChangeText={(text)=> setState(text)}
          placeholder='Estado'/>
        <TouchableOpacity onPress={() => saveData() } style={ estilos.confirmButton}>
          Revisar e confirmar dados
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  confirmButton : {
    backgroundColor: '#66CDAA',
    borderColor: '#A9A9A9',
    borderRadius: 4,
    borderWidth: 1,
    color: '#F8F8FF',
    marginVertical: 4,
    padding: 4,
  },  
  input: {
    borderColor: '#000',
    borderRadius: 4,
    borderWidth: 1,
    marginVertical: 4,
    padding: 2,
  },  
  page : {
    padding : 16
  },
})
