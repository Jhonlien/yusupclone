import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Header from '../components/Header'
import Fontisto from 'react-native-vector-icons/Fontisto';

// const image = {uri: 'https://wallpapercave.com/wp/9GIKZfw.jpg'}
//const image = {uri: 'https://thumbs.dreamstime.com/b/white-headphones-blue-background-123426136.jpg'}
// const image = {uri: 'https://d39l2hkdp2esp1.cloudfront.net/img/photo/154505/154505_00_2x.jpg'}

// const image = {uri: 'https://www.rd.com/wp-content/uploads/2019/10/newspaper-760x506.jpg'}


const MiniCard = (props) =>{
    return (
        <View style={{
            height:45,
            width:180,marginTop:5
        }}>
            <ImageBackground source={{uri:props.image}} style={{
                 flex: 1,
                 resizeMode:'cover',
                 justifyContent: "center",
            }}
            imageStyle={{borderRadius:4, opacity:0.8}}
            > 
                <Text style={{
                    textAlign:'center',
                    color:'white',
                    fontSize:18,
                    fontWeight:'bold',
                    marginRight:25
                    
                }}>
                    {props.title}
                </Text>
            </ImageBackground>
        </View>
    )
}

const Explore = () => {
    return (
        <View style={{flex:1}}>
            <Header/>
            <View 
                style={{
                    flexWrap:'wrap',
                    flexDirection:'row', 
                    padding:10,
                    justifyContent:'space-between'}}>
                <MiniCard image='https://wallpapercave.com/wp/9GIKZfw.jpg' title="Trending"/>
                <MiniCard image='https://thumbs.dreamstime.com/b/white-headphones-blue-background-123426136.jpg' title="Music"/>
                <MiniCard image='https://d39l2hkdp2esp1.cloudfront.net/img/photo/154505/154505_00_2x.jpg' title="Games"/>
                <MiniCard image='https://www.rd.com/wp-content/uploads/2019/10/newspaper-760x506.jpg' title="News" /> 
            </View>
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({})
