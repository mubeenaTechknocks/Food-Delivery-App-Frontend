import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, LogBox } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';


import SplashScreen from './screens/SplashScreen'
import Login from './screens/Login'
import Verify from './screens/Verify';
import RegisterMessage from './screens/RegisterMessage';
import Register from './screens/Register';
import HomeDrawer from './screens/HomeDrawer';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {

  // LogBox.ignoreAllLogs();


  const [darkMode, setDarkMode] = useState(false);

  // const authContext = React.useMemo(() => ({

  //   toggleTheme() {
  //     setDarkMode(darkMode => !darkMode);

  //   }
  // }), []);

  const [loaded] = useFonts({

    OpenSansRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    OpenSansSemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf'),

  });

  if (!loaded) {
    return null;
  }

  const CustomDefaultTheme = {
    ...DefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
      text: '#696969',
      card: 'white',
    }
  }

  const CustomDarkTheme = {
    ...DarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: 'black',
      text: "white",
      card: "white"
    }
  }

  const theme = darkMode ? CustomDarkTheme : CustomDefaultTheme

  return (
    <PaperProvider theme={theme}>
      {/* <AuthContext.Provider value={authContext}> */}
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {/* <Stack.Screen name="SplashScreen" component={SplashScreen}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="Login" component={Login}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="Verify" component={Verify}
              options={{
                headerShown: false
              }}
              />
          <Stack.Screen name="Register" component={Register}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="RegisterMessage" component={RegisterMessage}
            options={{
              headerShown: false
            }}
          /> */}
            <Stack.Screen name="HomeDrawer" component={HomeDrawer}
            options={{
              headerShown: false
            }}
          /> 
          <Stack.Screen name="HomeScreen" component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          
        


        </Stack.Navigator>

      </NavigationContainer>
      {/* </AuthContext.Provider> */}
    </PaperProvider>
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
