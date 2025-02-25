import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
    navigation: NativeStackNavigationProp<any>;
  };

const LoginScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username && password) {
      dispatch(login({ username, password }));
      navigation.navigate("Search");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View 
      style={styles.inputContainer}
      >
      <TextInput
        style={styles.input}
        placeholder="Username (Star Wars Character)"
        placeholderTextColor="#808080"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password (Birth Year)"
        placeholderTextColor="#808080"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor:"#ffffff" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 , color:"#343333"},
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5, color:"#343333" },
  inputContainer:{
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    borderColor:"#2A2827",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5 // For Android shadow
  }
});

export default LoginScreen;
