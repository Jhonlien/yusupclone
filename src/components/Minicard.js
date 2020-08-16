import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity, TouchableOpacityComponent } from 'react-native'
import {useNavigation, useTheme} from '@react-navigation/native'

const Minicard = (props) => {
    const navigation = useNavigation();
    const {colors} = useTheme();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('Videoplayer',{videoId:props.videoId,title:props.title})}>
        <View style={{flexDirection:'row', padding:10, backgroundColor:colors.headerColor, elevation:4}}>
            <Image 
                source={{uri:`https://i.ytimg.com/vi/${props.videoId}/default.jpg`}}
                style={{
                    width:"40%",
                    height: 100,
                    marginRight:10
                }}
            />
            <View style={{justifyContent:'space-between'}}>
                <Text 
                    style={{fontSize:14,width:Dimensions.get('screen').width/2, color:colors.logoTextColor}}
                    ellipsizeMode="tail"
                    numberOfLines={3}
                >
                    {props.title}
                </Text>
                <Text style={{fontSize:12, color:colors.logoTextColor}}>
                    {props.channel}
                </Text>
                <Text style={{fontSize:12, color: colors.logoTextColor}}>
                    {props.publishTime}
                </Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default Minicard

const styles = StyleSheet.create({})
