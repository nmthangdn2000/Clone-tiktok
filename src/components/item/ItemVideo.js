import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  Image,
} from 'react-native';
import React from 'react';
import { LOGO_IMG, PLAY_ARROW_IMG } from '../../configs/source';
import { COLOR, TEXT } from '../../configs/styles/index';
import { urlSourceMedia } from '../../utils/utils';

const ItemVideo = ({ item, NUM_COLUMS }) => {
  const { background, like } = item;
  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: width / NUM_COLUMS,
      backgroundColor: COLOR.BLACK,
      margin: 1,
    },
    containerView: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      alignItems: 'center',
    },
    txtView: {
      ...TEXT.SMALL,
      color: COLOR.WHITE,
    },
  });

  return (
    <ImageBackground
      source={{ uri: urlSourceMedia(background) }}
      style={styles.container}>
      <View style={styles.containerView}>
        <Image source={PLAY_ARROW_IMG} tintColor={COLOR.WHITE} />
        <Text style={styles.txtView}>{like}</Text>
      </View>
    </ImageBackground>
  );
};

export default ItemVideo;
