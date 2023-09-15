import { createStackNavigator } from '@react-navigation/stack';
import { useAppSelector } from 'app-redux/hooks';
import React from 'react';
import isEqual from 'react-fast-compare';
import { Host } from 'react-native-portalize';
import navigationConfigs from '../config/options';
import { ACCOUNT_ROUTE, APP_ROUTE, TICKET_ROUTE } from '../config/routes';
import AuthStack from './AuthScenes';
import MainTabContainer from './TabScenes';
import useAuthorized from 'hooks/useAuthen';
import ProfileScreen from 'feature/account/ProfileScreen';
import DetailTicket from 'feature/home/components/DetailTicket';

export type RootStackParamList = Record<string, any>;

const MainStack = createStackNavigator<RootStackParamList>();

const AppStack = () => (
    <Host>
        <MainStack.Navigator screenOptions={navigationConfigs}>
            <MainStack.Screen name={APP_ROUTE.MAIN_TAB} component={MainTabContainer} />
            <MainStack.Screen name={ACCOUNT_ROUTE.PROFILE} component={ProfileScreen} />
            <MainStack.Screen name={TICKET_ROUTE.DETAIL} component={DetailTicket} />
        </MainStack.Navigator>
    </Host>
);

const Navigation: React.FunctionComponent = () => {
    const { isLogin } = useAppSelector((state) => state.auth)

    if (isLogin) {
        return <AppStack />;
    }
    return <AuthStack />;
};

export default Navigation;
