import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { RNCamera } from 'react-native-camera';
import { FLIP_IMG } from '../../../configs/source';
import { TEXT, COLOR, SHADOW, SPACING } from '../../../configs/styles';

const Camera = ({ camera }) => {
  const options = [
    { icon: FLIP_IMG, name: 'Lật', onclick: () => console.log('a') },
    { icon: FLIP_IMG, name: 'Lật', onclick: () => console.log('a') },
    { icon: FLIP_IMG, name: 'Lật', onclick: () => console.log('a') },
    { icon: FLIP_IMG, name: 'Lật', onclick: () => console.log('a') },
    { icon: FLIP_IMG, name: 'Lật', onclick: () => console.log('a') },
  ];

  return (
    <>
      {/* <RNCamera
        ref={camera}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        defaultVideoQuality={RNCamera.Constants.VideoQuality['480p']}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        android
      /> */}
      <View style={styles.containerOption}>
        {options.map(option => {
          return (
            <Pressable onPress={option.onclick} style={styles.itemOption}>
              <Image source={option.icon} style={styles.icon} />
              <Text style={styles.txtOption}>{option.name}</Text>
            </Pressable>
          );
        })}
      </View>
    </>
  );
};

export default Camera;

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerOption: {
    backgroundColor: 'red',
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    padding: SPACING.S2,
    marginTop: SPACING.S4,
  },
  itemOption: {
    alignItems: 'center',
    padding: 3,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: COLOR.WHITE,
    ...SHADOW.REGULAR,
  },
  txtOption: {
    ...TEXT.SMALL_STRONG,
    color: COLOR.WHITE,
  },
});

/* <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity style={styles.button} onPress={startRecording}>
              <Text style={{ fontSize: 14 }}> RECORD </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={stopRecording}>
              <Text style={{ fontSize: 14 }}> STOP </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View>
          <Video
            source={{ uri: pathVideo }} // Can be a URL or a local file.
            ref={video}
            style={styles.backgroundVideo}
          />
        </View>
      )} */
