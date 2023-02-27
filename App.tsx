import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import FilterBySpirit from './components/FilterBySpirit';
import LookUpIngredient from './components/LookUpIngredient';
import Separator from './components/Separator';


const App = () => {
  return (
    <View>
      <View style={styles.container}>
        <Separator />
        <Text>Ideas for your classy (or trashy) cocktail celebrations!</Text>
        <StatusBar style="auto" />
        <Separator />
        <Separator />
      </View>

      <FilterBySpirit />

      <Separator />
      <Separator />
   
      <LookUpIngredient />

      <Separator />
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
});

export default App;
