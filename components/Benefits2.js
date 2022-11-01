import React, { Component } from 'react';

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
        width: '65%',
        height: '100%',
        resizeMode: 'contain'
    },
    benefitsTop: {
        alignItems: 'center'
    }
});

export default function Benefits2({ navigation }) {
    return (
        <View style={styles.benefitsWrapper}>
            <View style={styles.benefitsTop}>
                <Image style={styles.benefits} source={require('../assets/benefit2.png')} />
            </View>
        </View>
    );
};