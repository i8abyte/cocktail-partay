import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, Button, FlatList, Image } from 'react-native';
import axios, { AxiosError } from 'axios';

import { COCKTAIL_URL, GOOGLE_SEARCH_URL } from '../utils/constants/urls';
import Drink from '../interfaces/Drink';

type DrinkList = Drink[]

const FilterBySpirit = () => {
  const [inputText, setInputText] = useState<string>("");
  const [drinks, setDrinks] = useState<DrinkList>([]);
  const [drinksHeaderVisibility, setDrinksHeasderVisibility] = useState<boolean>(false);

  const getDrinks = async (ingredient: string) => {
    try {
      const res = await axios.get(COCKTAIL_URL + ingredient);
      setDrinks(res.data.drinks);
      setDrinksHeasderVisibility(true);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        console.log("Error when making a GET request to TheCocktailDB with Axios", err.toJSON());
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

      { drinksHeaderVisibility && <Text style={styles.drinksHeader}>Drinks</Text> }

      <FlatList 
        data={drinks}
        keyExtractor={(drink) => (drink.strDrink, drink.strDrinkThumb)}
        renderItem={({ item }) => (
          <SafeAreaView style={styles.item}>
            <Text style={styles.text}>{item.strDrink}</Text>
            <Image
              style={styles.image}
              source={{
                uri: item.strDrinkThumb
              }}
            />
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
  drinksHeader: {
    paddingTop: 50,
    paddingBottom: 25
  },
  item: {
    paddingBottom: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    textAlign: 'center',
    paddingTop: 20
  },
  image: {
    height: 200,
    width: 'auto',
    paddingBottom: 75
  }
});

export default FilterBySpirit;
