import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Houses from './Houses';
import Filters from './Filters';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Categories from './Categories';
import Saved from './Saved';
import Search from './Search';
import Add_review from './Add_review';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name='Home' component={Houses}/>
    //     <Tab.Screen name='Categories' component={Categories}/>
    //     <Tab.Screen name='Saved' component={Saved}/>
    //     <Tab.Screen name='Search' component={Search}/>
    // </Tab.Navigator>
    // </NavigationContainer>
    <Add_review/>
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
