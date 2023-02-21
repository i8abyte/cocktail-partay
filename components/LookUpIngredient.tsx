// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, SafeAreaView, Button, FlatList, Image } from 'react-native';
// import axios, { AxiosError } from 'axios';

// import { INGREDIENT_URL, GOOGLE_SEARCH_URL } from '../utils/constants/url';
// import Ingredient from '../interfaces/Ingredient';

// type IngredientList = Ingredient[]

// const FilterBySpirit = () => {
//   const [inputText, setInputText] = useState<string>("");
//   const [ingredients, setIngredients] = useState<IngredientList>([]);
//   const [ingredientsHeaderVisibility, setIngredientsHeasderVisibility] = useState<boolean>(false);

//   const getIngredients = async (ingredient: string) => {
//     try {
//       const res = await axios.get(INGREDIENT_URL + ingredient);
//       setIngredients(res.data.ingredients);
//       setIngredientsHeasderVisibility(true);
//     } catch (err: unknown) {
//       if (err instanceof AxiosError) {
//         console.log("Error when making a GET request to TheCocktailDB with Axios", err.toJSON());
//       }
//     }
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Enter an ingredient</Text>
//       <TextInput 
//         style={styles.input}
//         onChangeText={setInputText}
//         value={inputText}
//       />

//       <Button
//         title="Search"
//         onPress={() => { getIngredients(inputText) }}
//       />

//       { ingredientsHeaderVisibility && <Text style={styles.ingredientsHeader}>Ingredients</Text> }

//       <FlatList 
//         data={ingredients}
//         keyExtractor={(ingredient) => (ingredient.strIngredient)}
//         renderItem={({ item }) => (
//           <SafeAreaView style={styles.item}>
//             <Text style={styles.text}>{item.strIngredient}</Text>
//           </SafeAreaView>
//         )}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   ingredientsHeader: {
//     paddingTop: 50,
//     paddingBottom: 25
//   },
//   item: {
//     paddingBottom: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   text: {
//     textAlign: 'center',
//     paddingTop: 20
//   },
//   image: {
//     height: 200,
//     width: 'auto',
//     paddingBottom: 75
//   }
// });

// export default FilterBySpirit;
