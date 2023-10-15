import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MapView from './MapView';

const NavTop = () => {
  const navigation = useNavigation(); 

  const handleMapButtonPress = () => {
    navigation.navigate('MapView'); 
  };
  return (
    <View style={{marginVertical:20, marginHorizontal:10}}>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
        <TouchableOpacity>
            <Image source={require('./screens/Profilepicture.png')}/>
        </TouchableOpacity>
        <Text style={{fontSize:17, fontWeight:'700'}}>Home</Text>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
                <Image source={require('./screens/Addnewbutton.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10}} onPress={handleMapButtonPress}>
                <Image source={require('./screens/Mapbutton.png')}/>
            </TouchableOpacity>  
        </View>
      </View>
    </View>
  )
}

export default NavTop