import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

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
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30
    },
    benefitsTop: {
        paddingTop: 20,
        flex: 1,
        alignItems:  'flex-end',
        flexDirection: 'row'
    },
    benefitsText: {
        color: '#979797',
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20
    }
});

export default function Benefits({ navigation }) {
    const image = require('../assets/benefit1.png');
    return (
        <View style={styles.benefitsWrapper}>
            <ImageBackground source={image} resizeMode='contain' style={styles.benefitsTop}>

            </ImageBackground >
        </View>
    );
};