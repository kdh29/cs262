import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../styles/global';


export default function DetailsScreen({ route }) {
    // Get movie details from the route params
    const { title, rating, description } = route.params;

    return (
        <View style={globalStyles.detailsContainer}>
            <Text style={globalStyles.detailsTitle}>{title}</Text>
            <Text style={globalStyles.detailsText}>Rating: {rating}</Text>
            <Text style={globalStyles.detailsText}>Description: {description}</Text>
        </View>
    );
}