import React from "react";
import { View, Text, StyleSheet } from "react-native";

type PlanetProps = {
  planet: {
    name: string;
    population: string;
    climate: string;
  };
  fontSize: number;
};

const PlanetItem: React.FC<PlanetProps> = ({ planet , fontSize}) => {
  return (
    <View style={styles.item}>
      <Text style={[styles.name, { fontSize }]}>{planet.name}</Text>
      <Text>Population: {planet.population}</Text>
      <Text>Climate: {planet.climate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: { padding: 15, borderBottomWidth: 1, marginBottom: 5 },
  name: { fontWeight: "bold", fontSize: 18 },
});

export default PlanetItem;
