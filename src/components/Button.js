import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Button = () => {
    // const buttonSize = new Animated.Value(1);
    // const mode = new Animated.Value(0);
    // const handlePress = () => {
    //     Animated.sequence([
    //         Animated.timing(buttonSize,{
    //             toValue:0.95,
    //             duration:200,
    //             useNativeDriver: false
    //         }),
    //         Animated.timing(buttonSize,{
    //             toValue:1,
    //             useNativeDriver: false
    //         }),
    //         Animated.timing(buttonSize,{
    //             toValue: mode._value === 0 ? 0:1,
    //             useNativeDriver: false
    //         })
    //     ]).start();
    // }
    // const sizeStyle = {
    //     transform : [{scale : buttonSize}]
    // }
    // const rotation  = mode.interpolate({
    //     inputRange: [0,1],
    //     outputRange:["0deg", "45deg"]
    // })
    return (
        <View style={{position:'absolute',alignItems:'center'}}>
            <Animated.View style={styles.button}>
                <TouchableHighlight underlayColor="#c0392b">
                    <Animated.View>
                        <MaterialIcon name="add" size={24} color="#fff"/>
                    </Animated.View>
                </TouchableHighlight>
            </Animated.View>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button : {
        backgroundColor:'#c0392b',
        alignItems: 'center',
        justifyContent:'center',
        width: 72,
        height: 72,
        borderRadius: 72/2,
        position: 'absolute',
        top: -60,
        shadowColor:'#7F58FF',
        shadowRadius: 5,
        shadowOffset: {height: 10},
        shadowOpacity:0.3,
        borderWidth:2,
        borderColor: '#fff'

    }
})
