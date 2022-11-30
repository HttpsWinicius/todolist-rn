import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tarefas from "./src/pages/Tarefas";
import NovaTarefa from './src/pages/NovaTarefa';
import Detalhes from './src/pages/Detalhes';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tarefas">
        <Stack.Screen 
          name="Tarefas" 
          component={Tarefas}
          options={{
            headerTintColor: "#ffd900"
          }}
        />
        <Stack.Screen 
          name="NovaTarefa" 
          component={NovaTarefa}
          options={{
            headerTintColor: "#ffd900"
          }}
        />
        <Stack.Screen 
          name="Detalhes" 
          component={Detalhes}
          options={{
            headerTintColor: "#ffd900"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
