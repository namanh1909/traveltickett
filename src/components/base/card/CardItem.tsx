import Images from 'assets/images';
import Metrics from 'assets/metrics';
import React, { memo, useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';
import { Image, View, Text,StyleSheet } from 'react-native';

interface ItemPropsType {
    source: any;
    rating: any;
    name: string;
    description: string;
    long: string;
}

interface propsType {
    item: ItemPropsType
}

const CartItem = (props: propsType) => {
    const { item } = props;
    const { defaultImage } = Images.photo;
    const [error, setError] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View>
                    <Image source={item.source} style={styles.image} />
                    <View style={styles.rateBox}>
                        <Text style={styles.ratingText}>{item.rating}</Text>
                        <Image source={Images.icons.star} style={styles.iconStar} />
                    </View>
                </View>
                <View style={styles.body}>
                    <Text numberOfLines={1} style={styles.name} >{item.name}</Text>
                    <Text numberOfLines={2} style={styles.des}>{item.description}</Text>
                    <Text style={styles.long}>{item.long} km</Text>
                </View>
                <View>
                    <Image source={Images.icons.tab.setting} />
                </View>
            </View>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create ({
    container: {
        width: Metrics.screenWidth - 50,
        padding: 14,
        backgroundColor: "#fff",
        marginBottom: 18,
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 16,
        marginRight: 5
    },
    ratingText: {
        fontSize: 10,
        fontWeight: "500",
        marginRight: 5
    },
    iconStar: {
        width: 10,
        height: 10
    },
    rateBox: {
        flexDirection: "row",
        alignItems: "center",
        width: 48,
        backgroundColor: "#fff",
        paddingVertical: 14,
        borderRadius: 16,
        position: "absolute",
        justifyContent: "center",
        bottom: -20,
        left: 20
    },
    body: {
        maxWidth: 170,
        minWidth: 170,
        justifyContent: "space-evenly"
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    name: {
        fontWeight: "600",
        fontSize: 14,
    },
    des: {
        fontSize: 12,
        fontWeight: "400",
        marginVertical: 5
    },
    long: {
        fontSize: 10,
        color: "#161618"

    }
})
