import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const SearchScreen = () => {
  const navigation = useNavigation();

  const [query, setQuery] = useState("");

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.searchWrapper}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#888"
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
        />
      </View>

      {/* Your search results or content here */}
      <View style={styles.content}>
        <Text style={styles.resultText}>Search Query: {query}</Text>
      </View>
    </ScrollView>
  );
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
