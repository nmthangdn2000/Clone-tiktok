import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';

import { AVATA_IMG, HEART_OUTLINE_IMG } from '../../configs/source';
import CText from '../CText';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import Icon from '../Icon';

const { width } = Dimensions.get('window');

const ItemSearchVideo = ({ index, item }) => {
  console.log(item.item);
  const { caption, background, author, like, empty } = item.item;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: (width / 2 - SPACING.S2) * 2,
      margin: SPACING.S2,
    },
    video: {
      width: '100%',
      height: (width / 2 - SPACING.S2) * 2 - 60,
      borderRadius: BORDER.SMALL,
    },
    infor: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 30,
      height: 30,
      borderRadius: BORDER.PILL,
    },
    numHeart: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    txtName: {
      flexGrow: 1,
      maxWidth: '60%',
      paddingHorizontal: SPACING.S1,
    },
  });

  return empty ? (
    <View style={styles.container} />
  ) : (
    <View style={styles.container}>
      <>
        <Image source={background} style={styles.video} />
        <CText text={TEXT.STRONG} numberOfLines={2}>
          {caption}
        </CText>
        <View style={styles.infor}>
          <Image source={author.avatar} style={styles.avatar} />
          <CText numberOfLines={1} style={styles.txtName}>
            {author.name}
          </CText>
          <View style={styles.numHeart}>
            <Icon
              source={HEART_OUTLINE_IMG}
              width={14}
              height={14}
              color={COLOR.BLACK}
            />
            <CText text={TEXT.SMALL} color={COLOR.GRAY}>
              {like}
            </CText>
          </View>
        </View>
      </>
    </View>
  );
};

export default ItemSearchVideo;
