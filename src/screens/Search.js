import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Minicard from '../components/Minicard'
// import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation();

const Search = ({navigation}) => {
    const [value, setValue] = useState('');
    const [miniCard, setMiniCard ] = useState([])
    const [loading, setLoading] = useState(false);
    const fetchData = () => {
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDZFrCT8yDrL4EdA_U4eI0bm0l5C2mo3o0`)
        .then(res=>res.json())
        .then(result => {
            setMiniCard(result.items)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection:'row', padding:10, justifyContent:'space-around', elevation:3, backgroundColor:'white'}}>  
                <Ionicons name="md-arrow-back" size={28} color="grey" onPress={()=> navigation.goBack()}/>
                <TextInput
                    style={{width:"70%", height:35 ,backgroundColor:'#e6e6e6', padding:5}}
                    value={value}
                    placeholder="Search Anything"
                    onChangeText={(value) => {setValue(value)}}
                />
                <Ionicons name="md-send" size={28} color="grey" onPress={()=> fetchData()}/>
            </View>
            {/* <Minicard/> */}

            {
                loading ?
                <ActivityIndicator size="large" color="red" style={{marginTop:10}}/>
                :
                <FlatList 
                    data={miniCard}
                    renderItem={({item})=>{
                        return <Minicard 
                            videoId={item.id.videoId}
                            title={item.snippet.title}
                            thumbnail={item.snippet.thumbnails.default}
                            channel={item.snippet.channelTitle}
                            publishTime = {item.snippet.publishTime}
                        />
                    }}
                    keyExtractor={item => item.id.videoId}
                />
            }
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})
