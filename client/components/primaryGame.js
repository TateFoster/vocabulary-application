import React from "react";
import { TextInput, Text, StyleSheet, View, } from 'react-native';

const Welcome = () => {
    const title = "Welcome to your first challenge!"
    return (
        <View
            style={[styles.container, {
                flexDirection: 'column',
            },
            ]}>
            <div className='sidebar' />
            <Text> {title}
            </Text>
            <Button color="steelblue" shadowSize={1}>
                Click Me
            </Button>


        </View>
    );
};
export default Welcome;
