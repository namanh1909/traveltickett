import { AnyAction, CaseReducer, createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { generatePersistConfig } from 'utilities/helper';
import { CommonStatus } from './types';

interface IAuthState {
    isLogin: boolean,
    status: CommonStatus;
    error?: any;
}

type Reducer<A extends Action<any> = AnyAction> = CaseReducer<IAuthState, A>;

const initialState: IAuthState = {
    status: CommonStatus.IDLE,
    isLogin: false
};

const requestAuthLogin: Reducer<PayloadAction<string>> = state => {
    state.status = CommonStatus.LOADING;
    delete state.error;
};

const requestAuthRegister: Reducer<PayloadAction<string>> = state => {
    state.status = CommonStatus.LOADING;
    delete state.error;
};

const requestAuthSuccess: Reducer<PayloadAction> = (state, { payload }) => {
    state.status = CommonStatus.SUCCESS;
    state.isLogin = true;
};

const requestAuthFailed: Reducer<PayloadAction<any>> = (state, { payload }) => {
    state.status = CommonStatus.ERROR;
    state.error = payload;
};

const logOut: Reducer = state => {
    state.isLogin = false;
    state.status = CommonStatus.IDLE;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        requestAuthLogin,
        requestAuthRegister,
        requestAuthSuccess,
        requestAuthFailed,
        logOut,
    },
});

const persistConfig = generatePersistConfig('auth', ['auth']);

export const userInfoActions = authSlice.actions;
export default persistReducer<IAuthState>(persistConfig, authSlice.reducer);
