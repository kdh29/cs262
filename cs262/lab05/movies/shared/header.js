import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Header({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                {/* Wrap the question mark inside a Text component */}
                <Text style={globalStyles.about}>?</Text>
            </TouchableOpacity>
        </View>
    );
}
