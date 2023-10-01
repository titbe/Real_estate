import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function Add_review(){
    return(
        <View style={styles.container}>
            <View>
                <Image source={require('./screens/stargreen.png')}/>
                <Image source={require('./screens/star.png')}/>
                <Text>We’ve visited this home last week and it’s a cozy house.</Text>
            </View>
            <Button color={"green"} title="Add review"/>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'space-between'
    },

})