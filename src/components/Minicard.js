import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyDZFrCT8yDrL4EdA_U4eI0bm0l5C2mo3o0
const Minicard = (props) => {
    return (
        <View style={{flexDirection:'row', padding:10, backgroundColor:'white', elevation:4}}>
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
                    style={{fontSize:14,width:Dimensions.get('screen').width/2}}
                    ellipsizeMode="tail"
                    numberOfLines={3}
                >
                    {props.title}
                </Text>
                <Text style={{fontSize:12}}>
                    {props.channel}
                </Text>
                <Text style={{fontSize:12}}>
                    {props.publishTime}
                </Text>
            </View>
        </View>
    )
}

export default Minicard

const styles = StyleSheet.create({})
