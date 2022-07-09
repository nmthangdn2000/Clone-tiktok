import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  StatusBar,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Video from 'react-native-video';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import {
  ARROW_BACK_IMG,
  FLASH_OFF_IMG,
  FLIP_IMG,
  MUSIC_ICON_IMG,
  SPEED_IMG,
  TIMESTAMP_IMG,
} from '../../configs/source';
import { CText, Icon } from '../../components';
import CloseButton from './components/CloseButton';
import { useNavigation } from '@react-navigation/native';

const PreviewVideoScreen = ({ route }) => {
  const navigation = useNavigation();
  const [pathVideo, setPathVideo] = useState(null);

  useEffect(() => {
    setPathVideo(route.params.pathVideo);
  }, [route]);

  const options = [
    { icon: SPEED_IMG, name: 'Tốc độ', onclick: () => console.log('a') },
    { icon: FLIP_IMG, name: 'Lật', onclick: () => console.log('a') },
    { icon: TIMESTAMP_IMG, name: 'Hẹn giờ', onclick: () => console.log('a') },
    {
      icon: FLASH_OFF_IMG,
      name: 'Flash',
      onclick: () => console.log('a'),
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        animated={true}
        backgroundColor={COLOR.BLACK}
        translucent={false}
      />
      {pathVideo && (
        <Video
          style={styles.video}
          source={{ uri: pathVideo }}
          resizeMode={'cover'}
          repeat
          controls
        />
      )}

      <CloseButton navigation={navigation} icon={ARROW_BACK_IMG} />
      <View style={styles.audioTop}>
        <View style={styles.containerAudio}>
          <Icon
            source={MUSIC_ICON_IMG}
            tintColor={COLOR.WHITE}
            height={16}
            width={16}
          />
          <Text style={styles.txtAudio}>Thêm âm thanh</Text>
        </View>
      </View>
      <View style={styles.actionRight}>
        {options.map((option, index) => {
          return (
            <Pressable
              key={index}
              onPress={option.onclick}
              style={styles.itemOption}>
              <Image source={option.icon} style={styles.icon} />
              <Text style={styles.txtOption}>{option.name}</Text>
            </Pressable>
          );
        })}
      </View>
      <View style={styles.actionBottom}>
        <Pressable style={[styles.button, { backgroundColor: COLOR.WHITE }]}>
          <CText onPress={() => navigation.goBack()}>Quay lại</CText>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: COLOR.DANGER }]}>
          <CText
            onPress={() =>
              navigation.navigate('PostVideoScreen', { pathVideo })
            }>
            Tiếp tục
          </CText>
        </Pressable>
      </View>
    </View>
  );
};

export default PreviewVideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  video: {
    flex: 1,
  },
  audioTop: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.S4,
  },
  containerAudio: {
    backgroundColor: COLOR.setOpacity(COLOR.BLACK, 0.4),
    borderRadius: BORDER.PILL,
    paddingVertical: SPACING.S1,
    paddingHorizontal: SPACING.S4,
    flexDirection: 'row',
  },
  txtAudio: {
    ...TEXT.SUBTITLE,
    color: COLOR.WHITE,
    marginLeft: SPACING.S2,
  },
  actionRight: {
    position: 'absolute',
    top: SPACING.S4,
    right: SPACING.S2,
  },
  actionBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLOR.BLACK,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: BORDER.SMALL,
  },
  itemOption: {
    alignItems: 'center',
    padding: 3,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: COLOR.WHITE,
  },
  txtOption: {
    ...TEXT.SMALL_STRONG,
    color: COLOR.WHITE,
  },
});
