import React, { useState } from "react";
import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchPlanets } from "../redux/planetSlice";
import PlanetItem from "../components/PlanetItem";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>(); 
  const { planets, status } = useSelector((state: any) => state.planets);
  console.log("planets", planets)

  const handleSearch = (text: string) => {
    setQuery(text);
    if (text.length > 2) {
      dispatch(fetchPlanets(text));
    }
  };
  const calculateFontSize = (population: string) => {
    if (population === "unknown") return 16; 
    const populationNum = parseInt(population);
    return Math.min(Math.max(12, Math.log10(populationNum) * 4), 32);
  };


  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Search for planets..."
      value={query}
      onChangeText={handleSearch}
    />
    {status === "loading" && <Text>Loading...</Text>}
    <FlatList
       data={planets.slice().sort((a: { population: string }, b: { population: string }) => {
        if (a.population === "unknown") return 1; 
        if (b.population === "unknown") return -1;
        return parseInt(b.population) - parseInt(a.population);
      })}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <PlanetItem 
          planet={item} 
          fontSize={calculateFontSize(item.population)}
        />
      )}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 10 },
});

export default SearchScreen;
