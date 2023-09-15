import React from 'react';
import { Platform, View, Image, StyleSheet } from 'react-native';
import Metrics from 'assets/metrics';
import { StyledText, StyledTouchable } from 'components/base';
import { Themes } from 'assets/themes';
import Size from 'assets/sizes';
import { reset } from 'navigation/NavigationService';

const StyledTabBar = ({ state, descriptors, navigation }: any) => {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        reset(route.name)
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <StyledTouchable
                        accessibilityRole="button"
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        key={route.key}
                        customStyle={[styles.tabButton]}>
                            <View style={[styles.containerTab, {backgroundColor: isFocused ? "#E5E5E5" : "#fff"}]}>
                            <Image
                                source={options?.icon}
                                style={[
                                    styles.tabIcon,
                                    // { tintColor: isFocused ? Themes.COLORS.black : Themes.COLORS.textPrimary },
                                ]}
                            />
                            </View>
                    </StyledTouchable>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        marginBottom: Platform.OS === 'ios' ? Metrics.safeBottomPadding : 0,
        borderTopColor: '#DEE2E6',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        alignItems: Platform.OS === 'ios' ? 'flex-end' : 'center',
        height: '9%',
    },
    tabButton: {
        // alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    tabLabel: {
        paddingLeft: Size.PADDING.defaultTextPadding,
        textAlign: 'center',
    },
    containerTab: {
        padding: 10,
        borderRadius: 14
    }
});

export default StyledTabBar;
