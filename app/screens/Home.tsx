// app/screens/Home.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const Home = ({ navigation }: any) => {
  const user = FIREBASE_AUTH.currentUser;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>
      <Text style={styles.subtitle}>{user?.email}</Text>

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonLogout}
        onPress={() => FIREBASE_AUTH.signOut()}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    fontSize: 16,
    color: "#4b5563",
    marginBottom: 30,
  },
  buttonPrimary: {
    width: "80%",
    backgroundColor: "#3b82f6",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonLogout: {
    width: "80%",
    backgroundColor: "#ef4444",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
