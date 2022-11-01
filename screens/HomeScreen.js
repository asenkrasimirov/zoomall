import React, { Component } from 'react';

import { 
    View, 
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';

import { HappyBirthday } from '../components/HappyBirthday';
import { ZoomallCard } from '../components/ZoomallCard';

const win    = Dimensions.get('window');
const ratio  = (win.width - 30) / 750;
const height = 402 * ratio;

const styles = StyleSheet.create({
    homeLogo: {
        width: '35%',
        height: 70,
        marginTop: 20
    },
    logoWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    petBanner: {
        width: win.width - 30,
        height: height
    },
    petBannerTouch: {
        marginTop: 20
    },
    homeContainer: {
        margin: 15,
        display: 'flex',
        flexDirection: 'column'
    },
    scrollView: {
        
    },
    wrapper: {
        flex: 1,
    }
});

export default function HomeScreen({ navigation }) {

    return (
        <View style={styles.wrapper}>
           <View style={styles.logoWrapper}>
                <Image style={styles.homeLogo} resizeMode={'contain'} source={require('../assets/logo.png')} />
           </View>
           <ScrollView style={styles.scrollView}>
                <View style={styles.homeContainer}>
                    <ZoomallCard />
                    <HappyBirthday name={'Бъки'} discount={'-20%'} />
                    <TouchableOpacity style={styles.petBannerTouch}>
                        <Image style={styles.petBanner} resizeMode={'contain'} source={require('../assets/add-pet-banner.png')} />
                    </TouchableOpacity>
                </View>
           </ScrollView>
        </View>
    );
};