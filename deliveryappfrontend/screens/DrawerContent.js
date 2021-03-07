import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { useTheme, Avatar, Drawer } from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from 'react-native-vector-icons/AntDesign'

export function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={
          styles.drawerContent
        }
      >
        <View style={styles.userInfoSection}>
          <View style={styles.arrow}>
            <Avatar.Image
              source={{
                uri:
                  'https://images-na.ssl-images-amazon.com/images/I/91BDAgAQiXL.png',
              }}
              size={50}
            />

            <TouchableOpacity>
              <AntDesign name="arrowright" size={20} color="grey" />
            </TouchableOpacity>

          </View>
          <View style={styles.text}>
          <Text style={styles.title}>Lionel Messi</Text>
          <Text style={styles.title1}>Active</Text>
          </View>
          <Text style={styles.caption}>ID</Text>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Earnings"
            labelStyle={styles.drawer}
            onPress={() => { }}
          />
          <DrawerItem
            label="Performance"
            labelStyle={styles.drawer}
            onPress={() => { }}
          />
          <DrawerItem
            label="Refer a friend"
            labelStyle={styles.drawer}
            onPress={() => { }}
          />
          <DrawerItem
            label="Settings"
            labelStyle={styles.drawer}
            onPress={() => { }}
          />
        </Drawer.Section>

      </View>
    </DrawerContentScrollView>
  );
}



const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    marginTop: 20,
    fontFamily:'OpenSansSemiBold',
    marginBottom:10,
    fontSize:16
  },
  title1: {
    marginTop: 20,
    fontFamily:'OpenSansRegular',
    fontSize:16
  },
  caption: {
    fontSize: 12,
    fontFamily:'OpenSansRegular'
  },
  drawerSection: {
    marginTop: 15,
  },
  arrow: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  text:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  drawer:{
    fontFamily:'OpenSansSemiBold',
    color:'grey'
  }
});