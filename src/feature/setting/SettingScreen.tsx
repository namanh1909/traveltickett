import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import StyledText from 'components/base/StyledText';
import { StyledButton } from 'components/base';
import { useAppDispatch } from 'app-redux/hooks';
import { userInfoActions } from 'app-redux/slices/authSlice';

const SettingView: FunctionComponent = () => {

    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(userInfoActions.logOut)
    }

    return (
        <View style={styles.container}>
            <StyledText originValue={'Setting'} />
            <StyledButton onPress={handleLogout} title={'Log out'} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SettingView;
