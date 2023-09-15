import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from 'app-redux/hooks';
import { userInfoActions } from 'app-redux/slices/authSlice';
import { CommonStatus } from 'app-redux/slices/types';
import { StyledButton } from 'components/base';
import AlertMessage from 'components/base/AlertMessage';
import StyledInputForm from 'components/base/StyledInputForm';
import StyledLogo from 'components/base/StyledLogo';
import StyledOverlayLoading from 'components/base/StyledOverlayLoading';
import StyledSmallTouch from 'components/base/StyleSmallTouch';
import { AUTHENTICATE_ROUTE } from 'navigation/config/routes';
import { navigate } from 'navigation/NavigationService';
import React, { FunctionComponent, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import yupValidate from 'utilities/yupValidate';
import * as yup from 'yup';

const RegisterScreen: FunctionComponent = () => {
    const { t } = useTranslation();
    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const displayNameRef = useRef<any>(null);
    const passwordConfirmRef = useRef<any>(null);
    const dispatch = useAppDispatch()
    const loading = useAppSelector((state) => state.auth.status)


    const registerSchema = yup.object().shape({
        email: yupValidate.email(),
        password: yupValidate.password(),
        confirmPassword: yupValidate.password('password'),
        displayName: yupValidate.name()
    });

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(registerSchema),
    });
    const {
        formState: { isValid },
        handleSubmit,
    } = form;

    const handleSignUp = (data: any) => {
        dispatch(userInfoActions.requestAuthRegister(data));
    };
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
        >
            <SafeAreaView style={styles.body}>
            {loading == CommonStatus.LOADING && <StyledOverlayLoading visible={true} />}

                <StyledLogo />
                <FormProvider {...form}>
                <StyledInputForm
                        name={'displayName'}
                        placeholder={t('authen.register.displayName')}
                        keyboardType="email-address"
                        returnKeyType={'next'}
                        onSubmitEditing={() => emailRef.current.focus()}
                    />
                    <StyledInputForm
                        name={'email'}
                        placeholder={t('authen.register.emailPlaceholder')}
                        keyboardType="default"
                        returnKeyType={'next'}
                        onSubmitEditing={() => displayNameRef.current.focus()}
                    />
                    <StyledInputForm
                        name={'password'}
                        placeholder={t('authen.register.passwordPlaceholder')}
                        ref={passwordRef}
                        secureTextEntry={true}
                        returnKeyType={'next'}
                        maxLength={32}
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <StyledInputForm
                        name={'confirmPassword'}
                        placeholder={t('authen.register.passwordConfirm')}
                        ref={passwordConfirmRef}
                        secureTextEntry={true}
                        returnKeyType={'next'}
                        maxLength={32}
                        onSubmitEditing={() => passwordConfirmRef.current.focus()}
                    />
                </FormProvider>
                <StyledSmallTouch title='authen.login.registerText' customStyle={styles.registerButton}
                                onPress={handleSubmit(handleSignUp)}

                 />
{/*
                <StyledButton
                    onPress={handleSubmit(submit)}
                    title={'Confirm'}
                    customStyle={[styles.loginButton, !isValid && { backgroundColor: 'lightgray' }]}
                    disabled={!isValid}
                /> */}
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
    },
    registerButton: {
        marginTop: 20,
    },

});
export default RegisterScreen;
