import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import Video from 'react-native-video';
import { LOGO_IMG } from '../../configs/source';
import { COLOR, TEXT } from '../../configs/styles/index';

const SplashScreen = ({ navigation }) => {
  const videoRef = useRef(null);
  return (
    <View>
      <Text onPress={() => navigation.navigate('Home')} style={styles.text}>
        SplashScreen
      </Text>
      <Image
        source={LOGO_IMG}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
  },
  text: {
    color: COLOR.BLACK,
    ...TEXT.REGULAR,
  },
});
