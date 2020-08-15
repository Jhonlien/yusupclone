import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.root}>
            <View style={styles.rootIcon}>
                <AntDesign name="youtube" size={28} color="red" style={{marginTop:5, marginLeft:5}} />
                <Text style={styles.logoText}>YouSup</Text>
            </View>
            <View style={[styles.rootIcon,styles.rightIcon]}>
                <MaterialIcon name="videocam" size={26} color="#bdc3c7" style={styles.rightIconChild}
                    onPress={()=>{console.log('wrap')}}
                />
                <MaterialIcon 
                    name="search" 
                    size={26} 
                    color="#bdc3c7" 
                    style={styles.rightIconChild}
                    onPress={()=> {
                        navigation.navigate("Search")
                    }}
                />
                <MaterialIcon name="account-circle" size={26} color="#bdc3c7" style={styles.rightIconChild}/>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    root: {
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        backgroundColor:'white',
        padding:5,
        elevation: 2,
    },
    rootIcon : {
        flexDirection:'row'
    },
    rightIcon:{
        marginTop:8
    },
    rightIconChild:{
        marginRight:20
    },
    logo: {
        width: 50,
        height:50,
        marginTop:10
    },
    logoText:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:5,
        marginTop:5        
    }
})
