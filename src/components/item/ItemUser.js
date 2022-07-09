import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import CText from '../../components/CText';

import { AVATA_IMG } from '../../configs/source';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import CButton from '../CButton';
import { urlSourceMedia } from '../../utils/utils';

const ItemUser = ({ item }) => {
  const { avatar, name, userName, follow, numVideo } = item;
  return (
    <View style={styles.container}>
      <Image source={{ uri: urlSourceMedia(avatar) }} style={styles.avatar} />
      <View style={styles.content}>
        <CText text={TEXT.STRONG} numberOfLines={1}>
          {name}
        </CText>
        <CText text={TEXT.SUBTITLE} numberOfLines={1} color={COLOR.GRAY}>
          {userName}
        </CText>
        <CText text={TEXT.SUBTITLE} color={COLOR.GRAY}>
          {follow} follower - {numVideo} Video
        </CText>
      </View>
      <View>
        <CButton
          lable={'Follow'}
          onPress={() => console.log('Follow')}
          width={100}
        />
      </View>
    </View>
  );
};

export default ItemUser;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.S1,
    alignItems: 'center',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: BORDER.PILL,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.S3,
  },
});
