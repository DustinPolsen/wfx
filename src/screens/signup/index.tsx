import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import RoundButtonComp from '../../components/RoubdButtonComp';
import FullRoundButton from '../../components/FullRoundButton';

export default function SignUpScreen({navigation}: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            {/* Welcome Section */}
            <View style={{padding: 35}}>
              <Text style={{fontSize: 35}}>Welcome Back!</Text>
              <Text style={{fontSize: 15, marginTop: 10}}>
                Sign in to continue
              </Text>
            </View>

            {/* Input Fields */}
            <View style={{paddingHorizontal: 35}}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
              />

              <Text style={styles.label}>Enter your password</Text>
              <TextInput
                placeholder="Enter your Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
                style={styles.input}
              />
            </View>

            {/* Login Button and Forgot Password */}
            <View style={{alignItems: 'center', marginTop: 20}}>
              <RoundButtonComp
                textwidth={250}
                label={'Login Now'}
                backcolor={'#593116'}
                textcolor={'white'}
              />
              <Text style={{paddingTop: 20}}>Forgot Password?</Text>
            </View>

            {/* Social Login */}
            <View style={{alignItems: 'center', marginTop: 20}}>
              <View style={styles.socialButtons}>
                <FullRoundButton
                  image={require('../../assets/facebook_icon.png')}
                  backcolor={'#593116'}
                />
                <FullRoundButton
                  image={require('../../assets/google_icon.png')}
                  backcolor={'#593116'}
                />
                <FullRoundButton
                  image={require('../../assets/linkedin_icon.png')}
                  backcolor={'#593116'}
                />
              </View>
            </View>

            {/* Sign Up Link */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 20,
              }}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={{color: '#593116'}}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    width: '100%',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
});
