import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from 'app-redux/hooks';
import { userInfoActions } from 'app-redux/slices/authSlice';
import { CommonStatus } from 'app-redux/slices/types';
import { Themes } from 'assets/themes';
import { StyledInputForm } from 'components/base';
import StyledLogo from 'components/base/StyledLogo';
import StyledOverlayLoading from 'components/base/StyledOverlayLoading';
import StyledSmallTouch from 'components/base/StyleSmallTouch';
import React, { FunctionComponent, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SafeAreaView, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import yupValidate from 'utilities/yupValidate';
import * as yup from 'yup';


const DEFAULT_FORM: any = {
    email: 'nam.work1909@gmail.com',
    password: 'anhnam123',
};

const LoginScreen: FunctionComponent = () => {

    const passwordRef = useRef<any>(null);
    const dispatch = useAppDispatch()
    const loading = useAppSelector((state) => state.auth.status)

    const yupSchema = yup.object().shape({
        email: yupValidate.email(),
        password: yupValidate.password(),
    });
    const form = useForm({
        mode: 'onChange', // validate form onChange
        defaultValues: DEFAULT_FORM,
        resolver: yupResolver(yupSchema),
        reValidateMode: 'onChange',
        criteriaMode: 'firstError', // first error from each field will be gathered.
    });
    const {
        formState: { isValid },
        handleSubmit,
    } = form;


    const handleSignIn = (data: any) => {
        dispatch(userInfoActions.requestAuthLogin(data));
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
            enableResetScrollToCoords={false}
        >
            {loading == CommonStatus.LOADING &&<StyledOverlayLoading visible={true} />}
            <SafeAreaView style={styles.body}>
                <StyledLogo />
                <FormProvider {...form}>
                    <StyledInputForm
                        name="email"
                        customPlaceHolder="authen.login.placeholderEmail"
                        keyboardType="email-address"
                        maxLength={32}
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <StyledInputForm
                        name="password"
                        customPlaceHolder="authen.login.placeholderPassword"
                        ref={passwordRef}
                        secureTextEntry
                        returnKeyType="done"
                        maxLength={20}
                    />
                </FormProvider>
                <StyledSmallTouch title='authen.login.buttonLogin'
                customStyle={styles.button}
                onPress={handleSubmit(handleSignIn)}
                />
            </SafeAreaView>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        marginTop: 20,
        borderWidth: 0,
    },
    registerButton: {
        marginTop: 20,
    },
    errorMessage: {
        color: Themes.COLORS.borderInputError,
    },
    button: {
        marginTop: 18
    }
});

export default LoginScreen;
