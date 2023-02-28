// import { StyleSheet, Text, View } from "react-native";

import React from 'react';
import { 
	Text,
	 View,
	Button } from 'react-native';
// import { Header } from './Header';
// import { heading } from './Typography';

export default function MainArea() {
	return (
		<View>
			<Text style={styles.header}>Word Wizard</Text>
			<View>
				{/* <Header title="Welcome to React Native" /> */}
				{/* <Text style={heading}>Game One</Text> */}
				<Button style={styles.mainButton}
				title="Next Lesson"
				color="#000" />
				<Text>
					Edit App.js to change this screen and turn it
					into your app.
				</Text>
				{/* <Text style={heading}>Game Two</Text> */}
				<Text>
					Press Cmd + R inside the simulator to reload
					your app’s code.
				</Text>
				{/* <Text style={heading}>Game Three</Text> */}
				<Text>
					Press Cmd + M or Shake your device to open the
					React Native Debug Menu.
				</Text>
				{/* <Text style={heading}>Help</Text> */}
				<Text>
					Read the docs to discover what to do next:
				</Text>
			</View>
			);

		</View>
	);
}


const styles = {
	header: {
		fontSize: "7rem"
	},
	mainButton: {
		width: "80%"
	}
}