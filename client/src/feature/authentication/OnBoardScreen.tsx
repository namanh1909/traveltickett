import { SafeAreaView, StyleSheet, Text, ImageBackground, View } from 'react-native'
import React, { FunctionComponent } from 'react'
import Images from 'assets/images'
import StyledLogo from 'components/base/StyledLogo'
import { Themes } from 'assets/themes'
import StyledSmallTouch from 'components/base/StyleSmallTouch'
import { navigate } from 'navigation/NavigationService'
import { AUTHENTICATE_ROUTE } from 'navigation/config/routes'

const OnBoardScreen: FunctionComponent = ({ route }: any) => {

    const gotoLogin = () => {
        navigate(AUTHENTICATE_ROUTE.LOGIN);
    };

    const gotoRegister = () => {
        navigate(AUTHENTICATE_ROUTE.REGISTER);
    };

    return (
        <ImageBackground source={Images.photo.backgroundImage} resizeMode="cover" style={styles.image}>
            <SafeAreaView style={styles.container}>
                <StyledLogo style={styles.logo}/>
                <View>
                    <StyledSmallTouch title='authen.login.buttonLogin' customStyle={styles.buttonStyle} onPress={gotoLogin} />
                    <StyledSmallTouch title='authen.login.registerText' onPress={gotoRegister} />
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default OnBoardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    image: {
        flex: 1,
    },
    logo: {
        marginTop: 140
    },

    buttonStyle: {
        marginTop: 88,
        marginBottom: 17
    }
})