import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function AboutScreen() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>About About pages</Text>
            <Text style={globalStyles.text}>
                About this screen: It is!
            </Text>
        </View>
    );
}
