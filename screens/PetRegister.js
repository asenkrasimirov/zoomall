import React, { Component } from 'react';

import { 
    View, 
    StyleSheet,
    ImageBackground,
    ScrollView,
    Image
} from 'react-native';

import { PurpleButton } from '../components/Buttons/PurpleButton';
import { WhiteButton } from '../components/Buttons/WhiteButton';

const styles = StyleSheet.create({
    benefitsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    benefitsTop: {
       flex: 10,
       alignItems:  'flex-end',
       flexDirection: 'row',
    },
    registerWrapper: {
        flex: 4,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: 'white',
        position: 'relative',
        top: -35,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20
    } ,
    header: {
        color: 'black',
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 20
    },
    benefitsLogo: {
        width: '50%',
        marginBottom: 0,
    },
    resisterLogo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomText: {
        color: '#9E979F',
        fontSize: 12,
        paddingTop: 15,
        paddingBottom: 15,
        lineHeight: 18
    },
    alreadyRegistered: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    alreadyRegisteredLink: {
        color: '#A45084',
        textDecorationLine: 'underline'
    },
    socialLoginIcon: {
        width: 74,
        height: 30,
        resizeMode: 'contain'
    },
    socialList: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    continueWith: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    continueWithChild: {
        flex: 1,
        color: '#979797',
        fontSize: 15
    },
    continueWithDash: {
        height: 1,
        backgroundColor: '#D1D1D6',
        flex: 9
    },
    continueWithText: {
        paddingLeft: 10,
        paddingRight: 10,
        flex: 10
    },
    scrollViewElement: {
        marginTop: 25
    }
});

export default function PetRegister({ navigation }) {

    return (
        <View style={styles.benefitsWrapper}>
            <ImageBackground source={require('../assets/petregister.png')} resizeMode='cover' style={styles.benefitsTop}></ImageBackground>
            <View style={styles.registerWrapper}>
                <View style={styles.resisterLogo}>
                    <Image style={styles.benefitsLogo} resizeMode={'contain'} source={require('../assets/logo.png')} />
                </View>
                <ScrollView style={styles.scrollViewElement}>
                    <PurpleButton onPress={() => navigation.navigate('RegisterFinishScreen.js')} buttonState="active" title="Добави" />
                    <WhiteButton onPress={() => navigation.navigate('RegisterFinishScreen.js')} buttonState="active" title="По-късно" />
                </ScrollView>
            </View>
        </View>
    );
};