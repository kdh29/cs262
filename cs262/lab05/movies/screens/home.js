import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {
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
        <View style={globalStyles.container}>
            {/* Display list of movies */}
            <FlatList 
                data={movies} 
                renderItem={({ item }) => (
                    <TouchableOpacity style={globalStyles.item} onPress={() => navigation.navigate('Details', item)}>
                        <Text style={globalStyles.title}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}