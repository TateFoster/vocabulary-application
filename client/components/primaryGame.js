import React from "react";
import { TextInput, Text, StyleSheet, View } from 'react-native';

const primaryGame = () => {
    return (
        <View
            style={[styles.container, {
                flexDirection: 'column',
            },
            ]}>
            <Button color="lightblue" shadowSize={1}>
                Click Me
            </Button>
            <div className='sidebar' />
            <TextInput>
                Place your name here
            </TextInput>

        </View>
    );
};