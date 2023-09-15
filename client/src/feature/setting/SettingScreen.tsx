import React, { FunctionComponent, useRef, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import StyledText from 'components/base/StyledText';
import { StyledButton, StyledList } from 'components/base';
import { useAppDispatch } from 'app-redux/hooks';
import { userInfoActions } from 'app-redux/slices/authSlice';
import Images from 'assets/images';
import { Themes } from 'assets/themes';
import Metrics from 'assets/metrics';
import { data1 } from 'assets/contants';
import CardItem from 'components/base/card/CardItem';


const SettingView: FunctionComponent = () => {

    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(userInfoActions.logOut)
    }
    const inputRef = useRef<TextInput | null>(null);
    const [searchInput, setSearchInput] = useState('');
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);

    const onChangeText = (value: string) => {
        setSearchInput(value);
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FCFCFC', }}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Saved Places</Text>
                    <TouchableOpacity>
                        <Image source={Images.icons.plus} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            ref={inputRef}
                            placeholder="Try “Hawaii”"
                            style={styles.input}
                            onChangeText={onChangeText}

                        />
                        <Image style={styles.searchIcon} source={Images.icons.search} />
                    </View>
                    <StyledList
                        data={data1}
                        loading={loading}
                        refreshing={refreshing}
                        loadingMore={loadingMore}
                        renderItem={({ item }) => <CardItem item={item} />}
                    />
                </View>

            </SafeAreaView>
            {/* <StyledText originValue={'Setting'} />
            <StyledButton onPress={handleLogout} title={'Log out'} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold"
    },
    headerContainer: {
        padding: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
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
});

export default SettingView;
