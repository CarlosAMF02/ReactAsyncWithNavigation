import React, {useState} from 'react'
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { insertObject } from '../DB.js'

export default function ConfirmPage(props) {
  const [user, setUser] = useState(props.route.params.user)

  const confirmReceivedData = () => {
    try {
        insertObject(user.email, JSON.stringify(user))
        props.navigation.navigate('Formulário')
        alert('Dados salvos com sucesso')
    } catch ( e ) {
      alert(e)
    }
  }

  return(
    <SafeAreaView>
      <View style = {estilos.page}>
        <Text>Nome: {user.name}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Telefone: {user.telNumber}</Text>
        <Text>Endereço: {user.address}</Text>
        <Text>Bairro: {user.district}</Text>
        <Text>Cidade: {user.city}</Text>
        <Text>Estado: {user.state}</Text>
        <View style = {estilos.button}>
          <Button 
            title='Confirmar e Salvar' 
            onPress={() => confirmReceivedData() }/>
        </View>
        <View style = {estilos.button}>
          <Button title='Cancelar' onPress={() => alert('Teste') }/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  button : {
    marginTop: 8
  },
  page : {
    padding : 16
  },
})