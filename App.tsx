import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FilterBySpirit from './components/FilterBySpirit';

const App = () => {
  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <View>
      <View style={styles.container}>
        <Text>Ideas for your classy (or trashy) cocktail celebrations!</Text>
        <StatusBar style="auto" />
        <Separator />
      </View>
      <FilterBySpirit />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
