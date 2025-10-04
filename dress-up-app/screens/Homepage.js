import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Modal, TextInput, ScrollView, Button } from 'react-native';
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import accessories from '../constants/accessories';
import hats from '../constants/hats';
import outfits from '../constants/outfits';
import { useFonts } from 'expo-font'


export default function Homepage({ navigation }) {

    const [fontsLoaded] = useFonts({
        'Minecraft': require('../assets/fonts/Minecraft.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleBis}>
                    <Text style={styles.title}>Hello Kitty Dress Up Game !</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}>
                    <View style={styles.btn}>
                        <Text style={styles.playBtn}>Let's Play !</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d77bba',
        paddingTop: 200,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Minecraft',
        fontSize: 35,
        textAlign: 'center',
        color: 'rgb(200, 171, 198)',
    },
    playBtn: {
        fontFamily: 'Minecraft',
        fontSize: 15,
        color: 'rgb(255, 255, 255)',
        marginTop: 200,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'red'
    },
    titleBis: {
        width: 350,
    }
});
