import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {

    return (
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <View style = {styles.square}></View>
            </View>
            <Text style = {styles.itemText}>{props.text}</Text>
            <View style = {styles.circular}></View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF', 
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemleft: {
        flexDirection: 'Row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        color: '#000', // Added a color for contrast
        fontSize: 16, // Optional: Set font size for better visibility
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    }, 

});

export default Task;