import React from 'react';
import {Text, View, StyleSheet, Image, StatusBar} from 'react-native';
import RoubdButtonComp from '../../components/RoubdButtonComp';
import FullRoundButton from '../../components/FullRoundButton';
import {SignInGoogle} from '../../config/firebase/GoogleSignIn';
import {ToastAndroid} from 'react-native';

export default function SignInScreen({navigation}: any) {
  async function googleSignIn() {
    SignInGoogle().then(data => {
      if (!data) {
        ToastAndroid.show('Google Signin Failed!', ToastAndroid.SHORT);
        return;
      }
      ToastAndroid.show('Google Signin Success!', ToastAndroid.SHORT);
    });
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#f1a81f" barStyle="light-content" />
      <View
        style={{
          flex: 0.5,
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="cover"
          source={require('../../assets/signin.jpg')}></Image>
      </View>
      <View
        style={{
          flex: 0.5,
          backgroundColor: '#f1a81f',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            fontWeight: 'bold',
            color: '#fff',
          }}>
          Hello
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: '#fff',
            padding: 20,
          }}>
          Welcome to my first Ecommerce Platform
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 20,
            marginTop: 20,
          }}>
          <RoubdButtonComp
            label={'Log In'}
            textwidth={150}
            backcolor={'#593116'}
            textcolor={'white'}
          />
          <RoubdButtonComp
            onPress={() => navigation.navigate('SignUp')}
            label={'Sign Up'}
            textwidth={150}
            backcolor={'white'}
            textcolor={'black'}
          />
        </View>
        <View style={{justifyContent: 'flex-end', paddingBottom: 10}}>
          <Text style={{color: 'white', textAlign: 'center', marginTop: 20}}>
            Or via Social Media Account
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <FullRoundButton
              image={require('../../assets/facebook_icon.png')}
              backcolor={'#593116'}
            />
            <FullRoundButton
              image={require('../../assets/google_icon.png')}
              backcolor={'#593116'}
              onPress={() => googleSignIn()}
            />
            <FullRoundButton
              image={require('../../assets/linkedin_icon.png')}
              backcolor={'#593116'}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
