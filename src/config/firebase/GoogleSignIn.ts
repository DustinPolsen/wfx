import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const SignInGoogle = async () => {
  try {
    GoogleSignin.configure({
      offlineAccess: false,
      webClientId:
        '1019570737312-r0r5m7k0gj58i290rpqspsi2ff60i7ka.apps.googleusercontent.com',
      scopes: ['profile', 'email'], // what API you want to access on behalf of the user, default is email and profile
    });

    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const userInfo = await GoogleSignin.signIn();
    const {idToken} = await GoogleSignin.getTokens();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    auth().signInWithCredential(googleCredential);
    return userInfo;
  } catch (error) {
    console.log('error');
  }
};
