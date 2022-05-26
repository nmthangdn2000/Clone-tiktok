import { StyleSheet, View } from 'react-native';
import React from 'react';
import User from './User';
import TopTab from './TopTab';
import { COLOR } from '../../configs/styles';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <User />
      <TopTab />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
});
