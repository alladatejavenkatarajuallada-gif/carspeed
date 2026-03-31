import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens from 'screens' folder
import HomeScreen from './screens/Home';
import UserLoginScreen from './screens/UserLogin';
import UserRegisterScreen from './screens/UserRegister';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Car Speed Detection' }} 
        />
        <Stack.Screen 
          name="UserLogin" 
          component={UserLoginScreen} 
          options={{ title: 'User Login' }} 
        />
        <Stack.Screen 
          name="UserRegister" 
          component={UserRegisterScreen} 
          options={{ title: 'User Register' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
