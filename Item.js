import { View, Text, Image, TouchableOpacity } from 'react-native'

const Item = ({item}) => {
  return (
    <TouchableOpacity style={{gap: 8, marginBottom: 12}}>
        <View>
            <Image style={{width: '100%', height: 140}} source={item.src}/>
            <TouchableOpacity style={{position: 'absolute', right: 6, top: 6}}>
                <Image source={require('./assets/icons8-heart-filled-500.png')}/>
            </TouchableOpacity>
        </View>
        <View style={{gap: 6}}>
            <Text style={{fontSize: 18, fontWeight: 600}}>{item.tit}</Text>
            <Text>{item.desc}</Text>
        </View>
        <View>
            <Image source={require('./assets/Stars.png')}/>
        </View>
    </TouchableOpacity>
  )
}

export default Item