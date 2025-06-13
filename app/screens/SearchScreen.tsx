import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const SearchScreen = () => {
  const navigation = useNavigation();

  const [query, setQuery] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search...",
      },
    });
  }, [navigation]);

  return <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>;
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchWrapper: {
    padding: 16,
    backgroundColor: "#fff",
  },
  searchInput: {
    backgroundColor: "#f1f1f1",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    fontSize: 16,
  },
  content: {
    padding: 16,
    backgroundColor: "red",
  },
  resultText: {
    fontSize: 18,
  },
});
