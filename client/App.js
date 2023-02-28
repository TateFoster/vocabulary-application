import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainArea from "./MainArea/MainArea";

export default function App() {
  return (
    <View style={[styles.container,
    { flexDirection: 'column' },

    ]}>
      <Text>VocabApp!</Text>
      <StatusBar style="auto" />
      <MainArea />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
