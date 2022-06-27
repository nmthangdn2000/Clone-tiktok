import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { BORDER, COLOR, SPACING, TEXT } from '../../../configs/styles';
import {
  AVATA_IMG,
  BOOKMARK_IMG,
  PLAY_ICON_IMG,
} from '../../../configs/source';
import Icon from '../../../components/Icon';
import CText from '../../../components/CText';

const ListHeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundAudio}>
        <Image source={AVATA_IMG} style={styles.image} />
        <Icon source={PLAY_ICON_IMG} width={32} height={32} />
      </View>
      <View style={styles.content}>
        <View style={styles.inforAudio}>
          <CText text={TEXT.STRONG} fontSize={20} numberOfLines={1}>
            Chờ yêu chill
          </CText>
          <CText
            text={TEXT.SUBTITLE}
            color={COLOR.GRAY}
            fontSize={13}
            numberOfLines={1}
            style={styles.txt}>
            Dế choắc - Tiên Tiên
          </CText>
          <CText
            text={TEXT.SUBTITLE}
            color={COLOR.GRAY}
            fontSize={13}
            numberOfLines={1}>
            14 videos
          </CText>
        </View>
        <View style={styles.buttonFavorites}>
          <Icon
            source={BOOKMARK_IMG}
            tintColor={COLOR.BLACK}
            width={14}
            height={14}
          />
          <CText
            text={TEXT.STRONG}
            numberOfLines={1}
            color={COLOR.BLACK}
            style={styles.txtButton}>
            Thêm vào ưa thích
          </CText>
        </View>
      </View>
    </View>
  );
};

export default ListHeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: SPACING.S4,
  },
  backgroundAudio: {
    backgroundColor: COLOR.setOpacity(COLOR.BLACK, 0.1),
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  content: {
    marginLeft: SPACING.S3,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inforAudio: {
    flexDirection: 'column',
  },
  txt: {
    marginTop: SPACING.S2,
  },
  buttonFavorites: {
    borderRadius: BORDER.SMALL,
    borderWidth: 1,
    borderColor: COLOR.GRAY,
    paddingHorizontal: SPACING.S4,
    paddingVertical: SPACING.S1,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtButton: {
    marginLeft: SPACING.S1,
  },
});
