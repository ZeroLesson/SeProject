import * as React from 'react';
import { NavigationContainer , useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { Modal, Pressable } from 'react-native';
import Schedule from './pages/Schedule';
import Table from './pages/Table';
import Report from './pages/Report';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function MyDrawer() {
  
  const navigation = useNavigation();

  const goBack = () => {
    navigation.navigate('Schedule')
  }

  const goBack2 = () => {
    navigation.navigate('Report')
  }
  
  return (
    <Drawer.Navigator initialRouteName="Schedule" screenOptions={{ headerTitleAlign: 'center', headerTitle: 'ระบบแลกเวรพยาบาล' }}>
      <Drawer.Screen name="Schedule" component={Schedule} options={{
        headerRight: () => (<Link href="/modal" asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="bell-o"
                size={25}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Link>)
      }} />
      <Drawer.Screen name='Table' component={Table} options={{
        drawerItemStyle: { height: 0 }, headerLeft: () => (
          <Pressable onPress={()=> goBack()}>
            <FontAwesome
              name="chevron-left"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
          </Pressable>
        )
      }} />
      <Drawer.Screen name='Report' component={Report} options={{
        drawerItemStyle: { height: 0 }, headerLeft: () => (
          <Pressable onPress={()=> goBack()}>
            <FontAwesome
              name="chevron-left"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
          </Pressable>
        )
      }} />
    </Drawer.Navigator>
  );
}

export default function App(navigation) {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
