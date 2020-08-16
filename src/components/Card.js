import React from 'react'
import { StyleSheet, Text, View,Image, Dimensions, TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useTheme } from '@react-navigation/native';


const Card = (props) => {
    const navigation = useNavigation();
    const {colors} = useTheme();
    return (
        <TouchableOpacity onPress = {()=>navigation.navigate('Videoplayer',{videoId:props.videoId,title:props.title})}>
        <View>
            <Image 
                source={{uri:`https://i.ytimg.com/vi/${props.videoId}/default.jpg`}}
                style={styles.thumbnail}
            />
            <View style={styles.rootTitle}>
                <Image
                    source={{uri:`https://i.ytimg.com/vi/${props.videoId}/default.jpg`}}
                    style={styles.userImage}
                />
                <View>
                    <Text 
                        ellipsizeMode="tail"
                        numberOfLines={2}
                        style={{
                            fontSize: 14,
                            fontWeight:"900",
                            color: colors.logoTextColor,
                            width:Dimensions.get("screen").width-100
                        }}> {props.title}</Text>
                    <Text style={{
                         fontSize:12,
                         color:colors.logoTextColor
                    }}>{props.channel}</Text>
                </View>
                <View>
                    <MaterialIcon name="more" size={20} color={colors.logoTextColor} style={{marginTop:5}} />
                </View>
            </View>            
        </View>
        </TouchableOpacity>
    )
}

export default Card
const styles = StyleSheet.create({
    rootTitle:{
        height:100,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    thumbnail:{
        width:"100%",
        height:210
    },
    userImage:{
        width: 40,
        height:40,
        borderRadius:20,
        marginTop:5,
        marginRight:5
    },
    titleText:{
       
    },
    titleBottomText:{
       
    }
})
