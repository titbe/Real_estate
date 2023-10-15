import { Image, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Categories from './Categories';
import Search from './Search';
import Home from './Home';
import SavedItem from './SavedItem';
import { createStackNavigator } from '@react-navigation/stack';
import MapView from './MapView';
import NavTop from './NavTop';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackMap =()=>{
  return(
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name='Nav' component={NavTop}/>
      <Stack.Screen name='MapView' component={MapView} options={{headerTitle:'Map View', headerTitleAlign:'center'}}/>

    </Stack.Navigator>
  )
}

const renderHometIcon = () => (
  <Image source={require('./screens/home.png')}/>
);
const renderCategoriestIcon = () => (
  <Image source={require('./screens/Collections.png')}/>
);
const renderSavetIcon = () => (
  <Image source={require('./screens/Saved.png')}/>
);
const renderSearchtIcon = () => (
  <Image source={require('./screens/Search.png')}/>
);

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer >
        <Tab.Navigator initialRouteName='Home1' >
          <Tab.Screen name='Home1' component={StackMap} options={{tabBarIcon:renderHometIcon, tabBarLabel:'', headerShown:false}}/>
          <Tab.Screen name='Categories' component={Categories} options={{tabBarIcon:renderCategoriestIcon, tabBarLabel:'', headerTitleAlign:'center'}}/>
          <Tab.Screen name='Saved Item' component={SavedItem} options={{tabBarIcon:renderSavetIcon, tabBarLabel:'', headerTitleAlign:'center'}}/>
          <Tab.Screen name='Search' component={Search} options={{headerShown: false, tabBarIcon:renderSearchtIcon, tabBarLabel:''}}/>
      </Tab.Navigator>
      </NavigationContainer>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
