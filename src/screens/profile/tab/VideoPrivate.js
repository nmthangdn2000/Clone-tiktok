import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR } from '../../../configs/styles';
import ListVideo from '../ListVideo';

const data = [
  { key: '1' },
  { key: '2' },
  { key: '3' },
  { key: '4' },
  { key: '5' },
  { key: '6' },
  { key: '7' },
  { key: '8' },
  { key: '9' },
  { key: '10' },
  { key: '11' },
];
const VideoPrivate = ({ scrollHandle }) => {
  return <ListVideo dataList={data} scrollHandle={scrollHandle} />;
};

export default VideoPrivate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
});
