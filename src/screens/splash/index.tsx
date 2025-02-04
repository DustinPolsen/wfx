import {Text, ImageBackground} from 'react-native';
import React from 'react';

export default function SplashScreen({navigation}: any) {
  setTimeout(() => {
    navigation.navigate('SignIn');
  }, 3000);
  return (
    <ImageBackground
      source={require('../../assets/splashBg.jpg')}
      resizeMode="cover"
      style={{flex: 1, padding: 20}}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: '#fff',
        }}>
        Ecommerce App
      </Text>
    </ImageBackground>
  );
}
