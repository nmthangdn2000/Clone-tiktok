import { StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';

import CircularProgress from './components/CircularProgress';
import Effect from './components/Effect';
import Upload from './components/Upload';
import { SPACING } from '../../configs/styles';
import Camera from './components/Camera';
import CloseButton from './components/CloseButton';

const NewVideoScreen = ({ navigation }) => {
  const camera = useRef(null);

  const [isRecord, setIsRecord] = useState(true);

  const startRecording = async () => {
    const { uri, codec = 'mp4' } = await camera.current.recordAsync();
    if (uri) {
      navigation.navigate('PreviewVideoScreen', {
        pathVideo: uri,
      });
    }
  };

  const stopRecording = () => {
    camera.current.stopRecording();
  };

  return (
    <View style={styles.container}>
      <Camera camera={camera} navigation={navigation} isRecord={isRecord} />
      {isRecord && <CloseButton navigation={navigation} />}
      <View style={styles.containerBottom}>
        {isRecord && <Effect />}
        <View style={styles.containerButtonRecord}>
          {isRecord && <Text style={{ color: 'white' }}>âccac</Text>}
          <CircularProgress
            startRecording={startRecording}
            stopRecording={stopRecording}
            isRecord={isRecord}
            setIsRecord={setIsRecord}
          />
        </View>
        {isRecord && <Upload />}
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
    padding: SPACING.S6,
  },
  containerButtonRecord: {
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
