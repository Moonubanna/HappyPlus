/*Example of RealM Database in React Native*/
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Import external files
import Splash from './src/pages/Splash'
import Intro1 from './src/pages/IntroScreens/Intro1'
import Login from './src/pages/Login'
import OtpScreen from './src/pages/OtpScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator headerMode='none' initialRouteName="Splash">
          {/* <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Intro1" component={Intro1} /> */}
          {/* <Stack.Screen name="Login" component={Login} /> */}
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;