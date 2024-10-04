import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from './styles/global';
import HomeScreen from "./screens/home";
import DetailsScreen from "./screens/details";
import AboutScreen from "./screens/about";
import Header from "./shared/header";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({ headerRight: () => (<Header navigation={navigation}/>)})}/>
                <Stack.Screen name="Details" component={DetailsScreen} options={({ navigation }) => ({headerRight: () => (<Header navigation={navigation}/>)})} />
                <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Movie Info'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;