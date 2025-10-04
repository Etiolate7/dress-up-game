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

const handleNext = () => {
        if (selectedCategory === 'hat') {
            setSelectedHatIndex((prev) =>
                prev === null ? 0 : (prev + 1) % hats.length
            );
        } else if (selectedCategory === 'outfit') {
            setSelectedOutfitIndex((prev) =>
                prev === null ? 0 : (prev + 1) % outfits.length
            );
        } else if (selectedCategory === 'accessory') {
            setSelectedAccessoryIndex((prev) =>
                prev === null ? 0 : (prev + 1) % accessories.length
            );
        }
    };

    const handlePrev = () => {
        if (selectedCategory === 'hat') {
            setSelectedHatIndex((prev) =>
                prev === null ? hats.length - 1 : (prev - 1 + hats.length) % hats.length
            );
        } else if (selectedCategory === 'outfit') {
            setSelectedOutfitIndex((prev) =>
                prev === null ? outfits.length - 1 : (prev - 1 + outfits.length) % outfits.length
            );
        } else if (selectedCategory === 'accessory') {
            setSelectedAccessoryIndex((prev) =>
                prev === null ? accessories.length - 1 : (prev - 1 + accessories.length) % accessories.length
            );
        }
    };


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Create your own Hello Kitty !</Text>

                <View style={styles.characterContainer}>

                    <Image source={require('../assets/skin/frame.png')} style={[styles.layerFrame, { zIndex: 0 }]} />
                    <Image source={require('../assets/skin/hello-kitty.png')} style={[styles.layer, { zIndex: 1 }]} />
                    {selectedOutfitIndex !== null && (
                        <Image source={outfits[selectedOutfitIndex].require} style={[styles.layer, { zIndex: 2 }]} />
                    )}
                    {selectedHatIndex !== null && (
                        <Image source={hats[selectedHatIndex].require} style={[styles.layer, { zIndex: 3 }]} />
                    )}
                    {selectedAccessoryIndex !== null && (
                        <Image source={accessories[selectedAccessoryIndex].require} style={[styles.layer, { zIndex: 4 }]} />
                    )}
                </View>


                <View>
                    {selectedCategory && (
                        <>
                            <TouchableOpacity style={styles.arrowLeft} onPress={handlePrev}>
                                <Image source={require('../assets/btn/arrow-left.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.arrowRight} onPress={handleNext}>
                                <Image source={require('../assets/btn/arrow-right.png')} />
                            </TouchableOpacity>
                        </>
                    )}
                </View>

                <View style={styles.btn}>
                    <TouchableOpacity onPress={() => { setSelectedCategory('outfit'); setHasInteracted(true); }}>
                        <Image source={require('../assets/btn/btn-outfit.png')} style={styles.btnIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setSelectedCategory('hat'); setHasInteracted(true); }}>
                        <Image source={require('../assets/btn/btn-hat.png')} style={styles.btnIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setSelectedCategory('accessory'); setHasInteracted(true); }}>
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
