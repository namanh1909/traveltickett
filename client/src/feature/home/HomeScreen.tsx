import { StyledTouchable, StyledListViewSelected, StyledList } from 'components/base';
import React, { FunctionComponent, useRef, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text, TextInput, ScrollView, FlatList, Animated } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import auth from '@react-native-firebase/auth';
import Images from 'assets/images';
import Metrics from 'assets/metrics';
import { Themes } from 'assets/themes';
import CustomImageCarousal from 'components/base/carosel/CustomImageCarousalSquare';
import CardItem from 'components/base/card/CardItem';
import { data1, filterData } from 'assets/contants';
import { navigate } from 'navigation/NavigationService';
import { TAB_NAVIGATION_ROOT } from 'navigation/config/routes';
import { navigateReplace } from 'navigation/NavigationService';

const HomeScreen: FunctionComponent = () => {
    const [arraySelected, setArraySelected] = useState<any>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const inputRef = useRef<TextInput | null>(null);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [data2, setData] = useState<any[]>([]);
    const translateY = useRef(new Animated.Value(200));

    useEffect(() => {
        Animated.timing(translateY.current, {
            toValue: 0,
            duration: 800,
            useNativeDriver: false,
        }).start();
    }, [isTyping]);

    const value = translateY.current.interpolate({
        inputRange: [0, 0.8, 1],
        outputRange: [200, 100, 0], // Giảm khoảng cách giữa các giá trị
    });


    const onChangeText = (value: string) => {
        setSearchInput(value);
    };


    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
            enableResetScrollToCoords={false}
        >
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FCFCFC' }}>
                <View style={styles.headerContainer}>
                    <View style={styles.menuItem}>
                        <StyledTouchable
                            onPress={() => {
                                setIsTyping(false);
                                inputRef.current.blur()
                                navigate(TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.PROFILE)
                            }}
                        >
                            <Image source={Images.icons.menu} style={styles.menuIcon} />
                        </StyledTouchable>
                        <View style={styles.itemStyle}>
                            <Text style={styles.nameStyle}>{`Hello ${auth().currentUser?.displayName}`}</Text>
                            {auth().currentUser?.photoURL ? <Image
                                style={styles.avt}
                                source={{ uri: auth().currentUser?.photoURL }}
                            /> : <Image
                                style={styles.avt}
                                source={Images.photo.avatar}
                            />}

                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            ref={inputRef}
                            placeholder="Try “Hawaii”"
                            style={styles.input}
                            onFocus={() => setIsTyping(true)}
                            onChangeText={onChangeText}
                            onBlur={() => {
                                setIsTyping(false);
                                translateY.current.setValue(300);
                            }}
                        />
                        <Image style={styles.searchIcon} source={Images.icons.search} />
                    </View>
                </View>
                <View style={styles.contentSearchContainer}>
                    <StyledListViewSelected
                        customStyle={{}}
                        data={filterData}
                        arraySelected={arraySelected}
                        isMultiple={true}
                        // customStyleItem={styles.itemSelectStyle}
                        setArraySelected={(array: any) => setArraySelected(array)}
                    />
                </View>
                {!isTyping ? (
                    <CustomImageCarousal data={data1} pagination={true} autoPlay={undefined} />
                ) : (
                    <Animated.View
                        style={[
                            styles.listScrollContainer,
                            {
                                transform: [
                                    {
                                        translateY: translateY.current,
                                    },
                                ],
                            },
                        ]}
                    >
                        <StyledList
                            data={data1}
                            loading={loading}
                            refreshing={refreshing}
                            loadingMore={loadingMore}
                            renderItem={({ item }) => <CardItem item={item} />}
                        />
                    </Animated.View>
                )}
            </SafeAreaView>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        alignItems: 'center',
        padding: 30,
    },
    contScreen: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
        paddingHorizontal: 25,
    },
    contModalContent: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuIcon: {
        height: 36,
        width: 35,
    },
    menuItem: {
        justifyContent: 'space-between',
        width: Metrics.screenWidth - 50,
        flexDirection: 'row',
    },
    avt: {
        width: 50,
        height: 50,
        borderRadius: 16,
    },
    nameStyle: {
        fontWeight: '500',
        fontSize: 12,
        marginRight: 10,
    },
    itemStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Themes.COLORS.white,
        marginTop: 26,
        borderRadius: 26,
    },
    input: {
        backgroundColor: Themes.COLORS.white,
        width: Metrics.screenWidth - 90,
        paddingVertical: 12,
        paddingLeft: 18,
    },
    contentSearchContainer: {
        width: Metrics.screenWidth - 40,
        alignItems: 'center',
        marginLeft: 25,
        marginBottom: 10,
    },
    listContainer: {},
    listScrollContainer: {
        width: Metrics.screenWidth - 40,
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20,
    },
});

export default HomeScreen;
