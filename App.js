import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/login'
import Register from './src/pages/register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>       
       <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login acesso'}}
        />
        <Stack.Screen 
            name="Registro"
            component={Register} 
            options={{title: 'Faça seu registro'}}
        />
      </Stack.Navigator>
    </NavigationContainer>    
  );
}
