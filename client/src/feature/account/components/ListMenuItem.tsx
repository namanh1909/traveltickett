import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type itemPropsType = {
    id: number;
    name: string;
    text: string;
}


const ListMenuItem = (props: itemPropsType) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

export default ListMenuItem

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 20,
        backgroundColor: "#fff"
    },
    name: {
        fontWeight: "bold",
        marginBottom: 5
    },
    text: {

    }
})