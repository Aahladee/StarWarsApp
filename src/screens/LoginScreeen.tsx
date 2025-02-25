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
      <TextInput
        style={styles.input}
        placeholder="Username (Star Wars Character)"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password (Birth Year)"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor:"#ffffff" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});

export default LoginScreen;
