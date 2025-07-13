import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { parseSearchResult, Podcast } from "../models";
import { fetchFromApi } from "../services/api_service";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SearchScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Podcast[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://itunes.apple.com/search?media=podcast&term=${encodeURIComponent(
        query
      )}`;
      const data = await fetchFromApi(url, parseSearchResult);
      setResults(data.results);
    };

    if (query !== "") fetchData();
  }, [query]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View style={styles.header}>
        <Text style={styles.largeTitle}>Search</Text>
        <TextInput
          placeholder="Search podcasts..."
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
          placeholderTextColor="#888"
        />
      </View>
      <FlatList
        data={results}
        keyExtractor={(item) => item.trackId.toString()}
        contentContainerStyle={{
          backgroundColor: "white",
          padding: 16,
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: item.artworkUrl100 }}
                style={styles.itemImage}
              />
              <View style={{ flex: 1, marginLeft: 16, gap: 6 }}>
                <Text
                  style={{ fontSize: 18, fontWeight: "600" }}
                  numberOfLines={2}
                >
                  {item.trackName}
                </Text>
                <Text style={{ fontSize: 14 }} numberOfLines={1}>
                  {item.artistName}
                </Text>
                <Text style={{ fontSize: 12, color: "gray" }} numberOfLines={1}>
                  {item.trackCount} Episodes
                </Text>
                <View
                  style={{
                    height: StyleSheet.hairlineWidth,
                    marginTop: 4,
                    backgroundColor: "gray",
                  }}
                />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === "android" ? 16 : 0,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: "white",
  },
  largeTitle: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 12,
  },
  searchWrapper: {
    padding: 16,
    backgroundColor: "#fff",
  },
  searchInput: {
    backgroundColor: "#f1f1f1",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 16,
  },
  content: {
    padding: 16,
    backgroundColor: "red",
  },
  resultText: {
    fontSize: 18,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 24,
  },
  itemImage: {
    width: 68,
    height: 68,
    borderRadius: 8,
  },
});
