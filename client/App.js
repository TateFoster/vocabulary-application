import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainArea from "./MainArea/MainArea";

export default function App() {
	let engage = false;

	if (engage) {
		return <MainArea />;
	} else {
		return (
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app! Testing</Text>

				<StatusBar style="auto" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
