import React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import {useSelector} from 'react-redux';

import Header from '../components/Header'
import Card from '../components/Card'

const Home = () => {
    const cardData = useSelector(state => state)
    return (
        <View style={{flex:1}}>
            <Header/>
            {/* <ScrollView>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ScrollView>  */}
            <FlatList
                data={cardData}
                renderItem={({item})=>{
                    return <Card
                                
                            
                            />
                }}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
