import { StyleSheet, Text, View } from "react-native";

import React from 'react';
import { Text, View } from 'react-native';
import { Header } from './Header';
import { heading } from './Typography';

export default function MainArea() {
	return (
		<View>
			<Text>This will be the main area page</Text>
			<View>
				<Header title="Welcome to React Native" />
				<Text style={heading}>Step One</Text>
				<Text>
					Edit App.js to change this screen and turn it
					into your app.
				</Text>
				<Text style={heading}>See Your Changes</Text>
				<Text>
					Press Cmd + R inside the simulator to reload
					your app’s code.
				</Text>
				<Text style={heading}>Debug</Text>
				<Text>
					Press Cmd + M or Shake your device to open the
					React Native Debug Menu.
				</Text>
				<Text style={heading}>Learn</Text>
				<Text>
					Read the docs to discover what to do next:
				</Text>
			</View>
			);

		</View>
	);
}
