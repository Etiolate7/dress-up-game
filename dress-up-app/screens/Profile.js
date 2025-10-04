import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import outfits from '../constants/outfits';
import accessories from '../constants/accessories';
import hats from '../constants/hats';

export default function Profile() {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedHatIndex, setSelectedHatIndex] = useState(null);
    const [selectedOutfitIndex, setSelectedOutfitIndex] = useState(null);
    const [selectedAccessoryIndex, setSelectedAccessoryIndex] = useState(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Create your own Hello Kitty !</Text>

                <View style={styles.characterContainer}>

                    <Image source={require('../assets/skin/frame.png')} style={[styles.layerFrame]} />
                    <Image source={require('../assets/skin/hello-kitty.png')} style={[styles.layer]} />
                
                        <Image source={outfits[selectedOutfitIndex].require} style={[styles.layer]} />
                        <Image source={hats[selectedHatIndex].require} style={[styles.layer]} />
                        <Image source={accessories[selectedAccessoryIndex].require} style={[styles.layer]} />
                    
                </View>


                <View>
                            <TouchableOpacity style={styles.arrowLeft} onPress={handlePrev}>
                                <Image source={require('../assets/btn/arrow-left.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.arrowRight} onPress={handleNext}>
                                <Image source={require('../assets/btn/arrow-right.png')} />
                            </TouchableOpacity>
                </View>

                <View style={styles.btn}>
                    <TouchableOpacity>
                        <Image source={require('../assets/btn/btn-outfit.png')} style={styles.btnIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/btn/btn-hat.png')} style={styles.btnIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/btn/btn-accesory.png')} style={styles.btnIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d77bba',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Minecraft',
        textAlign: 'center',
        fontSize: 25,
        color: 'rgb(255, 207, 251)',
        paddingBottom: 20,
    },
    characterContainer: {
        height: 400,
        width: 340,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    layer: {
        position: 'absolute',
        height: 270,
        width: 270,
        resizeMode: 'contain',
    },
    btn: {
        flexDirection: 'row',
        marginTop: 100,
    },
    btnIcon: {
        margin: 5,
        height: 100,
        width: 100,
    },
    arrowLeft: {
        position: 'absolute',
        right: 30,
        bottom: -70,
        zIndex: 10,
    },
    arrowRight: {
        position: 'absolute',
        left: 30,
        bottom: -70,
        zIndex: 10,
    },
    arrowText: {
        fontSize: 40,
        color: 'white',
    },
    layerFrame: {
        position: 'absolute',
        height: 440,
        width: 440,
        bottom: -50,
        resizeMode: 'contain',
    }
});
