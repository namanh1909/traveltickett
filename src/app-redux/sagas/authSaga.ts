import { userInfoActions } from 'app-redux/slices/authSlice';
import { call, put, takeLatest } from 'redux-saga/effects';
import auth from '@react-native-firebase/auth'

function* signInWithEmailAndPasswordSaga(action: any): any {
  try {
    const { email, password } = action.payload;
    const userCredential = yield call(() => {
      auth().signInWithEmailAndPassword(email, password);
    }
    )
    const userInfo: boolean = auth().currentUser !== null ? true : false
    if (userInfo) {
      yield put(userInfoActions.requestAuthSuccess());
    }

  } catch (error) {
    yield put(userInfoActions.requestAuthFailed(error));
  }
}

function* registerWithEmailAndPassword(action: any): any {
  const { email, password, displayName } = action.payload; // Include displayName in the action payload

  try {
    const userCredential = yield auth().createUserWithEmailAndPassword(email, password);
    console.log('User account created & signed in!');

    // Set the display name for the user
    if (userCredential.user) {
      yield userCredential.user.updateProfile({ displayName });
    }

    yield put(userInfoActions.requestAuthSuccess());
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    } else if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    } else {
      console.error(error);
    }

    yield put(userInfoActions.requestAuthFailed(''));
  }
}

function* loginOutSaga() {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
    yield put(userInfoActions.requestAuthFailed(""));

}

export default function* userInfoSaga() {
  yield takeLatest(userInfoActions.requestAuthLogin.type, signInWithEmailAndPasswordSaga);
  yield takeLatest(userInfoActions.requestAuthRegister.type, registerWithEmailAndPassword);
  yield takeLatest(userInfoActions.logOut.type, loginOutSaga);

}
