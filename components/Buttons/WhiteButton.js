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
        color: '#A45084',
        alignSelf: 'stretch',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
        fontSize: 18
    },
    extraStyles: {},
    buttonRounded: {
        borderWidth: 1,
        borderColor: '#A45084',
        borderRadius: 10
    }
});

export class WhiteButton extends React.Component {

    constructor(props) {
        super(props);
    }
 
    render () {
        let extraStyles = extraStyles;

        if(this.props.rounded) {
            extraStyles = styles.buttonRounded;
        }
    
        return (
            <Pressable onPress={this.props.onPress} style={{...styles.buttonStyle, ...this.props.style, ...extraStyles}}>
                <LinearGradient style={styles.buttonStyleText} colors={['#FFFFFF', '#FFFFFF']}>
                    <Text style={[styles.buttonStyleText]}>
                        {this.props.title}
                    </Text>
                </LinearGradient>
            </Pressable>
        );
    }
}