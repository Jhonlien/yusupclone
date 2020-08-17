import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, Button, Switch } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useTheme } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const Header = () => {
    const navigation = useNavigation();
    const {colors} = useTheme();
    const dispatch = useDispatch();
    const currentTheme = useSelector(state => state.myDarMode)
    const switchDark = useSelector(state => state.switchDark)
    const toggleSwitch = () => {
        dispatch({type:'darkMode', payload:previousState => !previousState})
    };

    return (
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            height:50,
            backgroundColor:colors.headerColor,
            padding:5,
            elevation: 2,
        }}>
            <View style={styles.rootIcon}>
                <AntDesign name="youtube" size={28} color="red" style={{marginTop:5, marginLeft:5}} />
                <Text style={{
                    fontSize:18,
                    fontWeight:"bold",
                    marginLeft:5,
                    marginTop:5,
                    color:colors.logoTextColor  
                }}>YouSup</Text>
            </View>
            <View style={[styles.rootIcon,styles.rightIcon]}>
            <Switch
                style={{marginBottom:5, marginRight:10}}
                trackColor={{ false: "#ecf0f1", true: "#95a5a6" }}
                thumbColor={enable ? "#ecf0f1" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                    dispatch({type:'change_theme',payload:!currentTheme})
                    toggleSwitch()
                }}
                value={enable}
            />
                <MaterialIcon name="videocam" size={26} color={colors.icons} style={styles.rightIconChild}
                    onPress={()=>{console.log('wrap')}}
                />
                <MaterialIcon 
                    name="search" 
                    size={26} 
                    color={colors.icons}
                    style={styles.rightIconChild}
                    onPress={()=> {
                        navigation.navigate("Search")
                    }}
                />
                <MaterialIcon name="account-circle" size={26} color={colors.icons} style={styles.rightIconChild}/>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    
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
           
    }
})
