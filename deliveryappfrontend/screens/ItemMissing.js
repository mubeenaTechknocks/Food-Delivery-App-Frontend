import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Platform } from 'react-native'
import { RadioButton, Checkbox, useTheme } from 'react-native-paper'
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/Ionicons'


Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });


async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Restaurant Name",
        body: 'PICKUP',
        data: { data: 'goes here' },
        //onPress: () => {()=> navigation.navigate("COD") },
      },
      trigger: { seconds: 1 },
    });
  }
  
  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }
const ItemMissing = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()
    const [item1, setItem1] = useState(false);
    const [item2, setItem2] = useState(false);
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
  
    useEffect(() => {
      registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
        console.log(expoPushToken)
      });
  
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });
  
      return () => {
        Notifications.removeNotificationSubscription(notificationListener);
        Notifications.removeNotificationSubscription(responseListener);
      };
    }, []);
  

    return (
        <View style={styles.container}>

            <View style={styles.textcontainer}>
                <TouchableOpacity>
                    <Icon1 name="arrow-back" size={30} color="#FDC913" onPress={() => navigation.navigate("ConfirmItem")} style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.text}>Item Missing</Text>
            </View>
            <View style={styles.inputcontainer}>
                <View style={styles.iconcontainer}>

                    <Text style={styles.res}>Order Details</Text>
                </View>

                <View style={styles.detail}>
                    <View style={styles.detailcontainer}>
                        <Text style={styles.order}>Food Items</Text>
                        <View style={styles.ordercontainer}>
                            <Text style={styles.item}>1 * Milkshake</Text>
                            <Checkbox
                                status={item1 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setItem1(!item1);
                                }}
                                color="#FDC913"
                            />
                        </View>
                        <View style={styles.ordercontainer}>
                            <Text style={styles.item}>1 * Milkshake</Text>
                            <Checkbox
                                status={item2 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setItem2(!item2);
                                }}
                                color="#FDC913"
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.pad}>
                    <TouchableOpacity style={styles.detailcontainer}>
                        <Text style={styles.add} onPress={async () => {
                            await schedulePushNotification();
                        }}>Send Notification to Restaurant</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default ItemMissing


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        height: '100%',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,

    },

    inputcontainer: {
        backgroundColor: 'white',
        elevation: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 30,
        borderRadius: 20
    },
    iconcontainer: {
        flexDirection: 'row',
    },
    icon: {
        paddingRight: 13
    },
    add: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 18,
        alignSelf: 'center',
        color: "#696969"
    },
    detailcontainer: {
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 10,
        padding: 20
    },
    detail: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40
    },
    res: {
        fontFamily: 'OpenSansBold',
        fontSize: 20,
        color: "#696969"
    },
    order: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 18,
        color: "#696969"
        // alignSelf:'center'
    },
    item: {
        fontFamily: 'OpenSansRegular',
        fontSize: 15,
        paddingLeft: 20,
        paddingTop: 10,
        color: "#696969"
    },
    text: {
        fontSize: 25,
        fontFamily: 'OpenSansBold',
        color: "#696969"
    },
    textcontainer: {
        paddingBottom: 50,
        flexDirection: 'row'
    },
    pad: {
        paddingTop: 30
    },
    ordercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menu: {
        paddingRight: 80
    }
})