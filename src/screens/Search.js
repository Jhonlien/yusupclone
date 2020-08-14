import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Search = () => {
    const [value, setValue] = useState('');
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection:'row', padding:10, justifyContent:'space-around', elevation:3, backgroundColor:'white'}}>  
                <Ionicons name="md-arrow-back" size={28} color="grey"/>
                <TextInput
                    style={{width:"70%", height:35 ,backgroundColor:'#e6e6e6', padding:5}}
                    value={value}
                    onChangeText={(value) => {setValue(value)}}
                />
                <Ionicons name="md-send" size={28} color="grey"/>

            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})
