import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { menuSelect } from 'assets/contants'
import ListMenuItem from './ListMenuItem'

const ListMenu = () => {
    return (
        <FlatList data={menuSelect} style={{ marginTop: 20 }} renderItem={({ item }) => {
            return (
                <ListMenuItem name={item.name} text={item.text} id={item.id} key={item.id} />
            )
        }} />
    )
}

export default ListMenu

const styles = StyleSheet.create({})