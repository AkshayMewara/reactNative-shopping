import * as React from 'react';
import {Button, View, Linking,
  ImageBackground, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import Home from '../components/Home';
import { Notifications } from '../components/Notifications'

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      <ImageBackground style={{height:300, width: 300 , justifyContent: 'center'}} source={{uri:"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} >
        <View><Text>gvhbjnkl;kj vhbjnkml hbjnkm hvbjn k</Text></View>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </ImageBackground>

    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Draw() {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="HomeDraw"
        drawerContent={props => {
          return (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem
                label="Help"
                onPress={() => Linking.openURL('https://support.google.com/')}
              />
              <DrawerItem
                label="Logout"
                onPress={() => props.navigation.navigate('Login')}
              />
            </DrawerContentScrollView>
          );
        }}>
        <Drawer.Screen
          name="HomeDraw"
          component={Home}
          options={{title: 'Home'}}
        />
        <Drawer.Screen name="Notifications" component={Notifications} />

        {/* <Drawer.Screen name="Logout" component={Login} options={{headerShown: false}} /> */}
      </Drawer.Navigator>
    </>
  );
}
