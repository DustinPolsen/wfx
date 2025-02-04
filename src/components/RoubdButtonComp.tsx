import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function RoundButtonComp({
  label,
  backcolor,
  textcolor,
  textwidth,
  onPress,
}: {
  label: string;
  backcolor: string;
  textcolor: string;
  textwidth: number;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress && onPress();
      }}>
      <View
        style={{
          backgroundColor: backcolor,
          width: textwidth,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 20,
          borderColor: 'black',
          borderWidth: 1,
        }}>
        <Text
          style={{color: textcolor, textAlign: 'center', fontWeight: 'bold'}}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
