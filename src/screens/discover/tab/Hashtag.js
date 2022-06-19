import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR, SPACING } from '../../../configs/styles';
import IteamSearchHashTag from '../../../components/item/IteamSearchHashTag';
import ListView from '../../../components/ListView';

const Hashtag = () => {
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
    { key: '6' },
    { key: '7' },
    { key: '8' },
    { key: '9' },
    { key: '10' },
  ];

  return (
    <View style={styles.container}>
      <ListView
        data={data}
        renderItem={item => <IteamSearchHashTag item={item} />}
      />
    </View>
  );
};

export default Hashtag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingTop: SPACING.S2,
  },
});
