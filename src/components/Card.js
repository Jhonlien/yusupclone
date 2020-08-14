import React from 'react'
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Card = () => {
    return (
        <View>
            <Image 
                source={{uri:'https://images.unsplash.com/photo-1597079312585-82637250a4fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1074&q=80'}}
                style={styles.thumbnail}
            />
            <View style={styles.rootTitle}>
                <Image
                    source={{uri:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}}
                    style={styles.userImage}
                />
                <View>
                    <Text 
                        ellipsizeMode="tail"
                        numberOfLines={2}
                        style={styles.titleText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                    <Text style={styles.titleBottomText}>Channel Name | 30k views | 4 Years Ago</Text>
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
