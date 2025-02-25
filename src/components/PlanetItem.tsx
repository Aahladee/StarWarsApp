import React from "react";
import { View, Text, StyleSheet } from "react-native";

type PlanetProps = {
  planet: {
    name: string;
    population: string;
    climate: string;
  };
};

const PlanetItem: React.FC<PlanetProps> = ({ planet }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{planet.name}</Text>
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
