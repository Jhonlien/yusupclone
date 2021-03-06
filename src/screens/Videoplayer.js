import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview';


const Videoplayer = ({route}) => {
    const {videoId,title} = route.params
    return (
        <View style={{flex:1}}>
            <View style={{width:"100%", height:200}}>
                <WebView 
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{uri:`https://www.youtube.com/embed/${videoId}`}} />
            </View>
            <Text 
                style={{fontSize:20, width: Dimensions.get('screen').width-50, margin:9}}
                ellipsizeMode="tail"
                numberOfLines={2}
            >
                {title}
            </Text>
            <View
                style={{borderBottomWidth:1}}
            />
        </View>
    )
}

export default Videoplayer

const styles = StyleSheet.create({})
