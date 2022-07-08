import { StyleSheet, View, Image, Dimensions } from 'react-native';
import React from 'react';

import { HEART_OUTLINE_IMG } from '../../configs/source';
import CText from '../CText';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import Icon from '../Icon';

const { width } = Dimensions.get('window');

const ItemSearchVideo = ({ index, item }) => {
  const { caption, background, author, like, empty } = item.item;

  return empty ? (
    <View style={styles.container} />
  ) : (
    <View style={styles.container}>
      <>
        <View style={styles.video}>
          <Image source={background} style={styles.video} />
        </View>
        <CText text={TEXT.STRONG} numberOfLines={2}>
          {caption}
        </CText>
        <View style={styles.infor}>
          <View style={styles.avatar}>
            <Image source={author.avatar} style={styles.avatar} />
          </View>
          <CText
            numberOfLines={1}
            flexGrow={1}
            maxWidth={'60%'}
            paddingHorizontal={SPACING.S1}>
            {author.name}
          </CText>
          <View style={styles.numHeart}>
            <Icon
              source={HEART_OUTLINE_IMG}
              width={14}
              height={14}
              tintColor={COLOR.BLACK}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: (width / 2 - SPACING.S2) * 2,
    margin: SPACING.S2,
  },
  video: {
    width: '100%',
    height: (width / 2 - SPACING.S2) * 2 - 60,
    backgroundColor: COLOR.setOpacity(COLOR.BLACK, 0.1),
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
    backgroundColor: COLOR.setOpacity(COLOR.BLACK, 0.1),
  },
  numHeart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
