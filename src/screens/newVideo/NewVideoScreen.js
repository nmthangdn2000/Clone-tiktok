import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';

import CircularProgress from './components/CircularProgress';
import Effect from './components/Effect';
import Upload from './components/Upload';
import { SPACING } from '../../configs/styles';
import Camera from './components/Camera';
import Video from 'react-native-video';

const NewVideoScreen = () => {
  const camera = useRef(null);
  const video = useRef(null);

  const [pathVideo, setPathVideo] = useState(null);

  return (
    <View style={styles.container}>
      <Camera camera={camera} />
      <View style={styles.containerBottom}>
        <Effect />
        <View style={styles.containerButtonRecord}>
          <Text style={{ color: 'white' }}>âccac</Text>
          <CircularProgress camera={camera} setPathVideo={setPathVideo} />
        </View>
        <Upload />
      </View>
      {pathVideo && (
        <Video
          source={{ uri: pathVideo }}
          style={styles.backgroundVideo}
          controls={true}
        />
      )}
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
