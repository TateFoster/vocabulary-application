import { StyleSheet, Text, View } from "react-native";
import './MainArea.css';

import React from 'react';
import { Text, View } from 'react-native';
import { Header } from './Header';


export default function MainArea() {
	return (
		<View>
			<Text>Welcome to VOCABAPP</Text>
			<View>
				<section className="gameOne">
					<Header title="Welcome to the VocabApp Game" />
				</section>

				<div claassName="firstInstance">
					<Text>
						Edit App.js to change this screen and turn it
						into your app.
					</Text>
				</div>
				<section className="gameTwo">
					<Text>Game Two</Text>
					<Text>
						Press Cmd + R inside the simulator to reload
						your app’s code.
					</Text>
					<Text>Game Three</Text>
					<Text>
						Press Cmd + M or Shake your device to open the
						React Native Debug Menu.
					</Text>
				</section>
				<Text>Help</Text>
				<Text>
					Read the docs to discover what to do next:
				</Text>
			</View>
			);

		</View>
	);
}
