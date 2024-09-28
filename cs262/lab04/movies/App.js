import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    // Hardcoded list of movies
    const [movies, setMovies] = useState([
        { title: "Fellowship of the Ring", rating: 8.8, key: '1',
            description: "Some hobbits begin a quest with their fellows." },
        { title: "Two Towers", rating: 8.7, key: '2',
            description: "Some dark lords try to take over the world. Vigo breaks his foot in this one." },
        { title: "Return of the King", rating: 8.9, key: '3',
            description: "The dark lords are defeated, to much rejoicing. Gandalf makes a return more fabulous than ever." },
    ]);

    return (
        <View style={styles.container}>
            {/* Display list of movies */}
            <FlatList 
                data={movies} 
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details', item)}>
                        <Text style={styles.title}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

function DetailsScreen({ route }) {
    // Get movie details from the route params
    const { title, rating, description } = route.params;

    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>{title}</Text>
            <Text style={styles.detailsText}>Rating: {rating}</Text>
            <Text style={styles.detailsText}>Description: {description}</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Movies List' }} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Movie Details' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        padding: 15,
        marginVertical: 8,
        backgroundColor: '#f9c2ff',
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    detailsContainer: {
        flex: 1,
        padding: 20,
    },
    detailsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    detailsText: {
        fontSize: 16,
        marginBottom: 5,
    },
});
