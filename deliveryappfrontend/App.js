import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, LogBox } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { AuthContext } from './Components/Context';


import SplashScreen from './screens/SplashScreen'
import Login from './screens/Login'
import Verify from './screens/Verify';
import RegisterMessage from './screens/RegisterMessage';
import Register from './screens/Register';
import HomeDrawer from './screens/HomeDrawer';
import HomeScreen from './screens/HomeScreen';
import SearchOrder from './screens/SearchOrder';
import ConfirmOrder from './screens/ConfirmOrder';
import ActiveOrder from './screens/ActiveOrder';
import Map from './screens/Map';
import Mode from './screens/Mode';
import RestaurantMap from './screens/RestaurantMap';
import Pickup from './screens/Pickup';
import ConfirmItem from './screens/ConfirmItem';
import ItemMissing from './screens/ItemMissing';
import PickupCompleted from './screens/PickupCompleted';
import DeliveryMap from './screens/DeliveryMap';
import Deliver from './screens/Deliver';
import DeliveryCompleted from './screens/DeliveryCompleted';
import DeliveryCOD from './screens/DeliveryCOD';
import CashonDelivery from './screens/CashonDelivery';

const Stack = createStackNavigator();

export default function App() {

  // LogBox.ignoreAllLogs();


  const [darkMode, setDarkMode] = useState(false);

  const authContext = React.useMemo(() => ({

    toggleTheme() {
      setDarkMode(darkMode => !darkMode);

    }
  }), []);

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
      background: '#FDC913',
      text: 'black',
      card: "white"

    }
  }

  const CustomDarkTheme = {
    ...DarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: 'black',
      text: "white",
      card: 'black'


    }
  }

  const theme = darkMode ? CustomDarkTheme : CustomDefaultTheme

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
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
            {/* <Stack.Screen name="HomeDrawer" component={HomeDrawer}
            options={{
              headerShown: false
            }}
          /> 
          <Stack.Screen name="HomeScreen" component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="SearchOrder" component={SearchOrder}
            options={{
              headerShown: false
            }}
          />
            <Stack.Screen name="ActiveOrder" component={ActiveOrder}
            options={{
              headerShown: false
            }}
          />
           <Stack.Screen name="ConfirmOrder" component={ConfirmOrder}
            options={{
              headerShown: false
            }}
          />
           <Stack.Screen name="Map" component={Map}
            options={{
              headerShown: false
            }}
          />
           <Stack.Screen name="Mode" component={Mode}
            options={{
              headerShown: false
            }}
          />*/}
          {/* <Stack.Screen name="RestaurantMap" component={RestaurantMap}
            options={{
              headerShown: false
            }}
          />  */}
            {/* <Stack.Screen name="Pickup" component={Pickup}
            options={{
              headerShown: false
            }}
          /> 
            <Stack.Screen name="ConfirmItem" component={ConfirmItem}
            options={{
              headerShown: false
            }}
          /> 
            <Stack.Screen name="ItemMissing" component={ItemMissing}
            options={{
              headerShown: false
            }}
          /> 
            <Stack.Screen name="PickupCompleted" component={PickupCompleted}
              options={{
                headerShown: false
              }}
            />
          <Stack.Screen name="DeliveryMap" component={DeliveryMap}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="Deliver" component={Deliver}
              options={{
                headerShown: false
              }}
            /> */}
             {/* <Stack.Screen name="DeliverCompleted" component={DeliveryCompleted}
              options={{
                headerShown: false
              }}
            /> */}
             {/* <Stack.Screen name="DeliverCOD" component={DeliveryCOD}
              options={{
                headerShown: false
              }}
            /> */}
             <Stack.Screen name="CashonDelivery" component={CashonDelivery}
              options={{
                headerShown: false
              }}
            />


          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
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
