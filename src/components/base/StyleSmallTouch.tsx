import React, { FunctionComponent } from 'react';
import { StyleProp, ViewStyle, TouchableOpacity, TouchableOpacityProps, StyleSheet,Text } from 'react-native';
import { Themes } from 'assets/themes';
import StyledText from './StyledText';

interface StyledSmallTouchProps extends TouchableOpacityProps {
    customStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
    onPress?(): void;
    onPressIn?(): void;
    onPressOut?(): void;
    onLongPress?(): void;
    throttleTime?: number;
    title: string;
}


const StyledSmallTouch: FunctionComponent<StyledSmallTouchProps> = (props: StyledSmallTouchProps) => {
    const { disabled, onPress } = props;

    return (
        <TouchableOpacity activeOpacity={0.6} disabled={disabled} style={[ styles.button, props.customStyle]} {...props} onPress={onPress}>
            <StyledText i18nText={props.title} customStyle={[styles.title]} />
        </TouchableOpacity>
    );
};


export default StyledSmallTouch;

const styles = StyleSheet.create({
    button: {
        backgroundColor: Themes.COLORS.primary,
        width: 180,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        marginVertical: 13,
        fontSize: 15,
        textTransform: 'uppercase',
        color: Themes.COLORS.white
    }

});