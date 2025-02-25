import React, { useState } from "react";
import { View, TextInput, FlatList, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchPlanets } from "../redux/planetSlice";
import PlanetItem from "../components/PlanetItem";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
//   const dispatch = useDispatch();
const dispatch = useDispatch<AppDispatch>(); 
  const { planets, status } = useSelector((state: any) => state.planets);

  const handleSearch = (text: string) => {
    setQuery(text);
    if (text.length > 2) {

      dispatch(fetchPlanets(text));
    }
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
        data={planets}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <PlanetItem planet={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 10 },
});

export default SearchScreen;
