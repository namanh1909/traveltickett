import { Themes } from 'assets/themes';
import React, { memo } from 'react';
import { StyleProp, TextStyle, TouchableOpacity, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

interface ItemListProps {
    name: string;
    isActive?: boolean;
    onPressItem?(item: any): void;
    isDisabled?: boolean;
    customStyleItem?: StyleProp<TextStyle>;
    customStyleText?: StyleProp<TextStyle>;
}
const ItemListViewSelected = (propsItem: ItemListProps) => {
    return (
        <TouchableOpacity
            onPress={propsItem.onPressItem}
            activeOpacity={propsItem?.isDisabled ? 1 : 0.6}
            style={[
                styles.btn,
                propsItem.customStyleItem,
                {
                    backgroundColor: propsItem.isActive ? "#FDF8F1" : Themes.COLORS.white,
                    borderColor: propsItem.isActive ? Themes.COLORS.primary : "#E8E8E8",
                    borderWidth: 2,
                },
            ]}
        >
            <Text
                style={[
                    styles.text,
                    propsItem.customStyleText,
                    { color: propsItem.isActive ? Themes.COLORS.primary : "#B7B7B7" },
                ]}
            >
                {propsItem.name}
            </Text>
        </TouchableOpacity>
    );
};
const styles = ScaledSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginLeft: '8@s',
        borderColor: Themes.COLORS.black,
        borderWidth: 0.3,
    },
    text: {
        fontSize: 12,
        color: Themes.COLORS.black,
        paddingHorizontal: 10,
        fontWeight: "500",
        paddingVertical: 5
    },
});
export default memo(ItemListViewSelected, (prev, next) => {
    return prev.isActive === next.isActive;
});
