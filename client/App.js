import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container,
    { flexDirection: 'column' },

    ]}>
      <Text>VocabApp!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
