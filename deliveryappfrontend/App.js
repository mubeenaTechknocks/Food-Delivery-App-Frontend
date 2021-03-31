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
import Profile from './screens/Profile';
import SavingsAccount from './screens/SavingsAccount';
import PersonalDetails from './screens/PersonalDetails';
import Document from './screens/Document';
import IdPermits from './screens/IdPermits';
import Idcard from './screens/Idcard';
import Earnings from './screens/Earnings';
import Payout from './screens/Payout';
import COD from './screens/COD';
import Summary from './screens/Summary';
import Notification from './screens/Notification';
import Shift from './screens/Shift';
import Problems from './screens/Problems';
import DeliveryTip from './screens/DeliveryTip';
import WeekPayouts from './screens/WeekPayouts';
import OrderProblem from './screens/OrderProblem';
import WeekLogin from './screens/WeekLogin';
import LoginHistory from './screens/LoginHistory';
import ReferFriend from './screens/ReferFriend';
import NewProblem from './screens/NewProblem';
import Settings from './screens/Settings';
import ReferFriend2 from './screens/ReferFriend2';
import Help from './screens/Help';
import ReportProblem from './screens/ReportProblem';
import EarningDetail from './screens/EarningDetail';
import Performance from './screens/Performance';
import Contact from './screens/Contact';
import ProblemDetails from './screens/ProblemDetails';
import PushNotification from './Components/PushNotification';



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
      background: '#f5fffa',
      text: '#696969',
      card: 'white',
      primary:'#FDC913',
      border:'#FDC913',
      notification:'white'
    }
  }

  const CustomDarkTheme = {
    ...DarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#181914',
      text: "white",
      card: "#242526",
      primary:'#3A3B3C',
      border:'white',
      notification:'#3A3B3C'
     
    }
  }

  const theme = darkMode ? CustomDarkTheme : CustomDefaultTheme

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen}
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
          />
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

            <Stack.Screen name="RestaurantMap" component={RestaurantMap}
              options={{
                headerShown: false
              }}
            /> 
            <Stack.Screen name="Pickup" component={Pickup}
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
            />
            <Stack.Screen name="DeliveryCompleted" component={DeliveryCompleted}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="DeliveryCOD" component={DeliveryCOD}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="CashonDelivery" component={CashonDelivery}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="Mode" component={Mode}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="Profile" component={Profile}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="PersonalDetails" component={PersonalDetails}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="SavingsAccount" component={SavingsAccount}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="IdPermits" component={IdPermits}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Document" component={Document}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Idcard" component={Idcard}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Earnings" component={Earnings}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Payout" component={Payout}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="COD" component={COD}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Summary" component={Summary}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Notification" component={Notification}
              options={
                { headerShown: false }
              } />


            <Stack.Screen name="Shift" component={Shift}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Problems" component={Problems}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="DeliveryTip" component={DeliveryTip}
              options={
                { headerShown: false }
              } />



            <Stack.Screen name="WeekPayouts" component={WeekPayouts}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="OrderProblem" component={OrderProblem}
              options={
                { headerShown: false }
              } />


            <Stack.Screen name="WeekLogin" component={WeekLogin}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="LoginHistory" component={LoginHistory}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="ReferFriend" component={ReferFriend}
              options={
                { headerShown: false }
              } />
            <Stack.Screen name="ReferFriend2" component={ReferFriend2}
              options={
                { headerShown: false }
              } />
            <Stack.Screen name="NewProblem" component={NewProblem}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Settings" component={Settings}
              options={
                { headerShown: false }
              } />
            <Stack.Screen name="Help" component={Help}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="ReportProblem" component={ReportProblem}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="EarningDetail" component={EarningDetail}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Performance" component={Performance}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="Contact" component={Contact}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="ProblemDetails" component={ProblemDetails}
              options={
                { headerShown: false }
              } />

            <Stack.Screen name="PushNotification" component={PushNotification}
              options={
                { headerShown: false }
              } /> 
              


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
