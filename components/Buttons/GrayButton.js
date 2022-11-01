import * as React from 'react';

import { Pressable, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        height: 50,
        alignItems: 'center',
    },
    buttonStyleText: {
        display: 'flex',
        flex: 1,
        color: '#333333',
        alignSelf: 'stretch',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
        fontSize: 18
    }
});

export class GrayButton extends React.Component {

    constructor(props) {
        super(props);
    }
 
    render () {
        return (
            <Pressable onPress={this.props.onPress} style={{...styles.buttonStyle, ...this.props.style}}>
                <LinearGradient style={styles.buttonStyleText} colors={['#E5E9F1', '#D7DDEA']}>
                    <Text style={[styles.buttonStyleText]}>
                        {this.props.title}
                    </Text>
                </LinearGradient>
            </Pressable>
        );
    }
}