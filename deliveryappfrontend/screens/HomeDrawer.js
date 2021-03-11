import React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';
import { useTheme } from '@react-navigation/native'
import HomeScreen from './HomeScreen';
import SearchOrder from './SearchOrder';


const Drawer = createDrawerNavigator();

const HomeDrawer = () => {

  const { colors } = useTheme()


  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
      drawerContentOptions={{
        style: {
          backgroundColor: colors.card,
        },
        activeTintColor: '#FDC913',
        itemStyle: { marginVertical: 5, paddingLeft: 30 },
        labelStyle: {
          fontFamily: 'OpenSansBold',
          fontSize: 18
        },
        activeBackgroundColor: '#f5fffa',
        inactiveTintColor: '#696969',
        marginVertical: 0
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen} />
         <Drawer.Screen
        name="SearchOrder" 
        component={SearchOrder} />
    
    </Drawer.Navigator>
  )
}

export default HomeDrawer