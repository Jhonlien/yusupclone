import React from 'react'
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Card = (props) => {
    return (
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
                        style={styles.titleText}> {props.title}</Text>
                    <Text style={styles.titleBottomText}>{props.channel}</Text>
                </View>
                <View>
                    <MaterialIcon name="more" size={20} color="grey" style={{marginTop:5}} />
                </View>
            </View>            
        </View>
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
        fontSize: 14,
        fontWeight:"900",
        width:Dimensions.get("screen").width-100
    },
    titleBottomText:{
        fontSize:12,
        color:"#95a5a6"
    }
})
