import { StyleSheet, Text, View } from "react-native";

export default function Filters(){
    return(
        <View style={styles.text}>
            <View style={styles.container}>
                <Text >Rent or Buy</Text>
                <Text>Buy</Text>
            </View>
            {/* <Text>─────────────────────────────────────</Text> */}

            <View style={styles.container}>
                <Text>Square feet</Text>
                <Text>500sqft - 1000 sqft</Text>
            </View>
            {/* <Text>─────────────────────────────────────</Text> */}

            <View style={styles.container}>
                <Text>Bedrooms</Text>
                <Text>4bd</Text>
            </View>
            {/* <Text>─────────────────────────────────────</Text> */}

            <View style={styles.container}>
                <Text>Baths</Text>
                <Text>2ba</Text>
            </View>
            {/* <Text>─────────────────────────────────────</Text> */}

            <View style={styles.container}>
                <Text>New Construction</Text>
                <Text>Yes</Text>
            </View>
            {/* <Text>─────────────────────────────────────</Text> */}

            <View style={styles.container}>
                <Text>Year Built</Text>
                <Text> 2000 </Text>
            </View>
            {/* <Text>─────────────────────────────────────</Text> */}

            <View style={styles.container}>
                <Text>Close to Public Transportation</Text>
                <Text>Yes</Text> 
            </View>
            {/* <Text>─────────────────────────────────────</Text> */}
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        marginHorizontal: 10,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    text:{
        flex:1,
        marginTop:40
    }
})