import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getBooks = async () => {
    try {
      const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry%20potter');
      const json = await response.json();
      setData(json.items); // Correct key for book data is 'items'
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text>
              {item.volumeInfo.title}, Published: {item.volumeInfo.publishedDate}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default App;
