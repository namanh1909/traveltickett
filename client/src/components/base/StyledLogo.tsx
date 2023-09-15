import { Themes } from 'assets/themes';
import * as React from 'react';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet, Text,  View } from 'react-native';


const StyledText = (props: any) => {
    return (
        <View style={[styles.container,{ ...props.style}]}>
            <Text style={[styles.text]}>
                EXPLORA
            </Text>
            <Text style={styles.des}>- if not now, when? - </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: Themes.COLORS.primary,
        fontSize: 45,
        fontWeight: Themes.FONTSWEIGHT.fontBold,
    },
    des: {
        fontSize: 15,
        textTransform: 'uppercase',
        color: Themes.COLORS.primary,
        paddingTop: 10
    },
});

export default memo(StyledText, isEqual);
