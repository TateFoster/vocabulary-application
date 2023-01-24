import { StyleSheet, Text, View } from "react-native";

export default function GamePage() {
	const wordGroups = {
		abdicate: {
			synonym: ["resign", "vacate", "renounce"],
			antonym: ["assume", "claim", "seize"],
		},
		consecutive: {
			synonym: ["successive", "continuous", "uniterrupted"],
			antonym: ["nonsequential"],
		},
		omit: {
			synonym: [""],
			antonym: [],
		},
	};

	return (
		<View>
			<Text>Here is place for game</Text>
		</View>
	);
}
