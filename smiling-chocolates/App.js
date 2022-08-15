import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ConfirmPage from './components/ConfirmPage'
import UserForm from './components/UserForm'

const Stack = createNativeStackNavigator()

export default function App() {
  return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Formulário" component={UserForm} />
        <Stack.Screen name="Confirmar Dados" component={ConfirmPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

