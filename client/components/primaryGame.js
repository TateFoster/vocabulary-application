import React from "react";
import { View, } from 'react-native';


const Welcome = () => {
    const title = "Welcome to your first challenge!"
    return (
        <View
            header={title}
            style={[styles.container, {
                flexDirection: 'column',
            },
            ]}>
            <div className='sidebar' />

            <Button color="steelblue" variant="primary" shadowSize={1}>
                Click Me
            </Button>


        </View>
    );
};
export default Welcome;
