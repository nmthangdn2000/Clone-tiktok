import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { RNCamera } from 'react-native-camera';
import CircularProgress from './components/CircularProgress';
import Effect from './components/Effect';
import Upload from './components/Upload';
import { SPACING } from '../../configs/styles';

const NewVideoScreen = () => {
  const PendingView = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Waiting</Text>
    </View>
  );
  const takePicture = async camera => {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  };
  return (
    <View style={styles.container}>
      {/* <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
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
        }}>
        {({ camera, status, recordAudioPermissionStatus }) => {
          if (status !== 'READY') {
            return <PendingView />;
          }
          return (
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}>
                <Text style={{ fontSize: 14 }}> SNAP </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera> */}
      <View style={styles.containerBottom}>
        <Effect />
        <View style={styles.containerButtonRecord}>
          <Text style={{ color: 'white' }}>âccac</Text>
          <CircularProgress />
        </View>
        <Upload />
      </View>
    </View>
  );
};

export default NewVideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  containerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: 'black',
    padding: SPACING.S6,
  },
  containerButtonRecord: {
    alignItems: 'center',
  },
});
