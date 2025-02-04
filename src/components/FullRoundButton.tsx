import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

export default function FullRoundButton({
  image,
  backcolor,
  onPress,
}: {
  image: any;
  backcolor: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity onPress={() => onPress && onPress()}>
      <View
        style={{
          backgroundColor: backcolor,
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          marginLeft: 20,
          borderColor: 'black',
          borderWidth: 1,
        }}>
        <Image source={image} style={{width: 35, height: 35}} />
      </View>
    </TouchableOpacity>
  );
}
