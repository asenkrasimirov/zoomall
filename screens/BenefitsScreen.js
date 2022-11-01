import React, { Component } from 'react';
import { MyCarousel } from '../components/BenefitsCarousel';

import { 
    View, 
    Image, 
    StyleSheet, 
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    benefitsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    benefits: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        marginTop: 60
    },
    benefitsTop: {
        flex: 6,
        padding: 20
    },
    benefitsBottom: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    benefitsLogo: {
        width: '40%',
        marginBottom: 20
    },
    benefitsText: {
        color: '#979797',
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20
    }
});

export default function BenefitsScreen({ navigation }) {
    return (
        <View style={styles.benefitsWrapper}>
            <MyCarousel navigation={navigation} />
            <View style={styles.benefitsBottom}>
                <Image style={styles.benefitsLogo} resizeMode={'contain'} source={require('../assets/logo.png')} />
            </View>
        </View>
    );
};