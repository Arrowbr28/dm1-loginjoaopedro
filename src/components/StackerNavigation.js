import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/Home";


const Stack = createNativeStackNavigator();

export default function StackerNavigation(){
   return(
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
         <Stack.Screen 
            name="Home"
            component={Home} 
            options={{title: 'Home'}}
        />
      </Stack.Navigator>
   )
}