import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR, SPACING } from '../../../configs/styles';
import ItemUser from '../../../components/item/ItemUser';
import ListView from '../../../components/ListView';

const User = () => {
  const data = [
    {
      avatar: '',
      name: 'Thang321',
      userName: 'Thang321',
      follow: '14.9k',
      numVideo: 60,
    },
    {
      avatar: '',
      name: 'Thang321',
      userName: 'Thang321',
      follow: '14.9k',
      numVideo: 60,
    },
    {
      avatar: '',
      name: 'Thang321',
      userName: 'Thang321',
      follow: '14.9k',
      numVideo: 60,
    },
    {
      avatar: '',
      name: 'Thang321',
      userName: 'Thang321',
      follow: '14.9k',
      numVideo: 60,
    },
    {
      avatar: '',
      name: 'Thang321',
      userName: 'Thang321',
      follow: '14.9k',
      numVideo: 60,
    },
    {
      avatar: '',
      name: 'Thang321',
      userName: 'Thang321',
      follow: '14.9k',
      numVideo: 60,
    },
    {
      avatar: '',
      name: 'Thang321',
      userName: 'Thang321',
      follow: '14.9k',
      numVideo: 60,
    },
    {
      avatar: '',
      name: 'Thang321',
      userName: 'Thang321',
      follow: '14.9k',
      numVideo: 60,
    },
    {
      avatar: '',
      name: 'Thang321',
      userName: 'Thang321',
      follow: '14.9k',
      numVideo: 60,
    },
    {
      avatar: '',
      name: 'Thang321',
      userName: 'Thang321',
      follow: '14.9k',
      numVideo: 60,
    },
    {
      avatar: '',
      name: 'Thang321',
      userName: 'Thang321',
      follow: '14.9k',
      numVideo: 60,
    },
    {
      avatar: '',
      name: 'Thang321',
      userName: 'Thang321',
      follow: '14.9k',
      numVideo: 60,
    },
    {
      avatar: '',
      name: 'Thang321',
      userName: 'Thang321',
      follow: '14.9k',
      numVideo: 60,
    },
    {
      avatar: '',
      name: 'Thang321',
      userName: 'Thang321',
      follow: '14.9k',
      numVideo: 60,
    },
  ];

  return (
    <View style={styles.container}>
      <ListView data={data} renderItem={item => <ItemUser item={item} />} />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: SPACING.S4,
    paddingTop: SPACING.S2,
  },
});
