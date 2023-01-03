import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, Button, FlatList } from 'react-native';
import axios from 'axios';

import { COCKTAIL_URL, GOOGLE_SEARCH_URL } from '../utils/constants/urls';
import Drink from '../interfaces/Drink';

type DrinkList = Drink[]

const FilterBySpirit = () => {
  const [inputText, setInputText] = useState<string>("");
  const [drinks, setDrinks] = useState<DrinkList>([]);
  const [drinksHeaderVisibility, setDrinksHeasderVisibility] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getDrinks = async (ingredient: string) => {
    try {
      const res = await axios.get(COCKTAIL_URL + ingredient);
      setDrinks(res.data.drinks);
      setDrinksHeasderVisibility(true);
      setError(null);
    } catch (err: any) {
      setError(err);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Enter a spirit</Text>
      <TextInput 
        style={styles.input}
        onChangeText={setInputText}
        value={inputText}
      />

      <Button
        title="Search"
        onPress={() => { getDrinks(inputText) }}
      />

      { drinksHeaderVisibility && <Text style={styles.item}>Drinks</Text> }

      <FlatList 
        data={drinks}
        keyExtractor={(drink) => drink.strDrink}
        renderItem={({ item }) => (
          <SafeAreaView style={styles.item}>
            <Text>{item.strDrink}</Text>
          </SafeAreaView>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default FilterBySpirit;
