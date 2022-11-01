import React, { Component } from 'react';

import { 
    View, 
    StyleSheet, 
    Image,
    ImageBackground,
    Text,
    ScrollView
} from 'react-native';

import { PurpleButton } from '../components/Buttons/PurpleButton';
import { InputText } from '../components/Buttons/InputText';

const styles = StyleSheet.create({
    benefitsTop: {
       flex: 4,
       alignItems:  'flex-end',
       flexDirection: 'row',
    },
    registerWrapper: {
        flex: 1,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: 'white',
        position: 'relative',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20
    } ,
    header: {
        color: 'black',
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 10
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
        marginTop: 30,
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
        marginTop: 25,
    },
    alreadyMember: {
        fontSize: 16,
        lineHeight: 22,
        color: 'black',
        marginBottom: 15
    },
    gotoApp: {
       marginTop: '150%'
    }
});

export default function CreatedPassword({ navigation }) {

    return (
        <View style={styles.registerWrapper}>
            <ScrollView style={styles.scrollViewElement}>
                <View style={styles.resisterLogo}>
                    <Image style={styles.benefitsLogo} resizeMode={'contain'} source={require('../assets/logo.png')} />
                </View>
                <Text style={styles.header}>Успешно създадена парола.</Text>
                <Text style={styles.alreadyMember}>Вие успешно създадохте Вашата нова парола.</Text>
                <PurpleButton style={styles.gotoApp} onPress={() => navigation.navigate('HomeScreen')} buttonState="active" title="Към приложението" />
            </ScrollView>
        </View>
    );
};