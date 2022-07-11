import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';

import CircularProgress from './components/CircularProgress';
import Effect from './components/Effect';
import Upload from './components/Upload';
import { COLOR, SPACING } from '../../configs/styles';
import Camera from './components/Camera';
import CloseButton from './components/CloseButton';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const NewVideoScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [uri, setUri] = useState('');

  const camera = useRef(null);

  const [isRecord, setIsRecord] = useState(false);

  const startRecording = useCallback(() => {
    camera.current.recordAsync();
  }, []);

  const endRecord = useCallback(
    async myUri => {
      setTimeout(() => {
        navigation.navigate('PreviewVideoScreen', {
          pathVideo: uri || myUri,
        });
      }, 1500);
    },
    [uri, navigation],
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        animated={true}
        backgroundColor={COLOR.BLACK}
        translucent={false}
      />
      {isFocused && (
        <Camera
          camera={camera}
          setUri={setUri}
          navigation={navigation}
          isRecord={isRecord}
          setIsRecord={setIsRecord}
        />
      )}

      {!isRecord && <CloseButton navigation={navigation} />}
      <View style={styles.containerBottom}>
        {!isRecord && <Effect />}
        <View style={styles.containerButtonRecord}>
          {!isRecord && <Text style={{ color: 'white' }}>15s</Text>}
          <CircularProgress
            startRecording={startRecording}
            isRecord={isRecord}
            camera={camera}
            endRecord={endRecord}
          />
        </View>
        {!isRecord && <Upload endRecord={endRecord} />}
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
