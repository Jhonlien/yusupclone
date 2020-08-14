import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import Header from '../components/Header'
import Card from '../components/Card'
import Search from './Search'

const Home = () => {
    return (
        <View style={{flex:1}}>
            <Search/>
            {/* <Header/>
            <ScrollView>
                <Card/>
                <Card/>

                <Card/>
                <Card/>


            </ScrollView> */}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
