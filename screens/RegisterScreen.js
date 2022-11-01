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
    benefitsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    benefitsTop: {
       flex: 4,
       alignItems:  'flex-end',
       flexDirection: 'row',
    },
    registerWrapper: {
        flex: 9,
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

export default function RegisterScreen({ navigation }) {

    return (
        <View style={styles.benefitsWrapper}>
            <ImageBackground source={require('../assets/register-background.png')} resizeMode='cover' style={styles.benefitsTop}></ImageBackground>
            <View style={styles.registerWrapper}>
                <ScrollView style={styles.scrollViewElement}>
                    <View style={styles.resisterLogo}>
                        <Image style={styles.benefitsLogo} resizeMode={'contain'} source={require('../assets/logo.png')} />
                    </View>
                    <Text style={styles.header}>Регистрация</Text>
                    <InputText icon="email" placeholder="Имейл" />
                    <InputText icon="password" placeholder="Парола" />
                    <InputText icon="password" placeholder="Повторете парола" />

                    <PurpleButton onPress={() => navigation.navigate('RegisterFinishScreen')} buttonState="active" title="Продължи" />
                    <View style={styles.continueWith}>
                        <View style={[styles.continueWithChild, styles.continueWithDash]}></View>
                        <Text style={[styles.continueWithChild, styles.continueWithText]}>или продължи с</Text>
                        <View style={[styles.continueWithChild, styles.continueWithDash]}></View>
                    </View>
                    <View style={styles.socialList}>
                        <Image style={styles.socialLoginIcon} source={require('../assets/fb.png')} />
                        <Image style={styles.socialLoginIcon} source={require('../assets/google.png')} />
                        <Image style={styles.socialLoginIcon} source={require('../assets/apple.png')} />
                    </View>

                    <Text style={styles.alreadyRegistered}>Вече имате регистрация? <Text style={styles.alreadyRegisteredLink}>Вход</Text></Text>
                    <Text style={styles.bottomText}>Регистрирайки се в ZooMall Club се съгласявате с общите условия и получавате важни съощения за вашият домашен любимец. Повече информация в приложението в меню Нотификации.</Text>
                </ScrollView>
            </View>
        </View>
    );
};