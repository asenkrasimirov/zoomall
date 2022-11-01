import * as React from 'react';

import { Pressable, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    buttonStyle: {
        height: 48,
        alignItems: 'center',
    },
    buttonStyleText: {
        display: 'flex',
        flex: 1,
        color: 'white',
        alignSelf: 'stretch',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
        fontSize: 18
    },
    buttonStyleDisabled: {
        opacity: 0.35
    }
});

export class PurpleButton extends React.Component {

    constructor(props) {
        super(props);
    }
 
    render () {

        let colors = ['#CA68A4', '#A45084'];
        let btnStyle = [styles.buttonStyleText];

        if(this.props.buttonState === 'disabled') {
            colors = ['#CA68A4', '#A45084'];
            btnStyle = [styles.buttonStyleText, styles.buttonStyleDisabled];
        }

        return (
            <Pressable onPress={this.props.onPress} style={{...styles.buttonStyle, ...this.props.style}}>
                <LinearGradient start={[0, 0]} end={[1,1]}  style={btnStyle} colors={colors}>
                    <Text style={styles.buttonStyleText}>
                        {this.props.title}
                    </Text>
                </LinearGradient>
            </Pressable>
        );
    }
}