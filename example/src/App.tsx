import { add, multiply } from 'react-native-test-library';
import { Text, View, StyleSheet } from 'react-native';

const result = multiply(3, 7);
const res = add(3, 7);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>Result: {res}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
