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
    },
    alreadyMember: {
        fontSize: 16,
        lineHeight: 22,
        color: 'black',
        marginBottom: 15
    }
});

function onEmailChanged(text, navigation) {
    if(text == 'test@test.com') {
        navigation.navigate('HomeScreen')
    }
}

export default function LoginScreen({ navigation }) {

    return (
        <View style={styles.benefitsWrapper}>
            <ImageBackground source={require('../assets/register-background.png')} resizeMode='cover' style={styles.benefitsTop}></ImageBackground>
            <View style={styles.registerWrapper}>
                <ScrollView style={styles.scrollViewElement}>
                    <View style={styles.resisterLogo}>
                        <Image style={styles.benefitsLogo} resizeMode={'contain'} source={require('../assets/logo.png')} />
                    </View>
                    <Text style={styles.header}>Добре дошли </Text>
                    <Text style={styles.alreadyMember}>Вече имате регистриран акаунт или издадена карта от наш магазин?</Text>
                    <InputText onChangeText={text => onEmailChanged(text, navigation)} icon="email" placeholder="Имейл или номер на карта" />
                    <PurpleButton onPress={() => navigation.navigate('LoginScreenPassword')} buttonState="active" title="Продължи" />
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

                    <Text style={styles.alreadyRegistered}>Нов потребител? <Text style={styles.alreadyRegisteredLink}>Регистрация</Text></Text>
                </ScrollView>
            </View>
        </View>
    );
};