import { StyleSheet } from 'react-native';
import React from 'react';
import { RNCamera } from 'react-native-camera';

const Camera = ({ camera }) => {
  return (
    <RNCamera
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
    />
  );
};

export default Camera;

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
