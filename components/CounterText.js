import React from 'react';
import { Text, Stylesheet } from 'react-native';

export defaulerText(props) {
    rett function Counturn (
    <Text style={[ 
        styles.counterText,
         { color: props.color, fontSize: props.fontSize},
    ]}>
        {props.children}
        </Text> };
        }

    const styles = StyleSheet.create({
        counterText: {
            fontWeight: 'bold',
        },
    });
