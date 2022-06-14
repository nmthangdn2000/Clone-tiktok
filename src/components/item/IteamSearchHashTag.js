import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CText from '../CText';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';

const IteamSearchHashTag = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconHashTag}>
        <CText text={TEXT.STRONG} size={16}>
          #
        </CText>
      </View>
      <View style={styles.content}>
        <CText text={TEXT.REGULAR} color={COLOR.GRAY} numberOfLines={1}>
          thangdeptrai thangdeptrai
        </CText>
        <CText text={TEXT.REGULAR} color={COLOR.GRAY}>
          123 lượt xem
        </CText>
      </View>
    </View>
  );
};

export default IteamSearchHashTag;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.S4,
    paddingVertical: SPACING.S2,
    alignItems: 'center',
  },
  iconHashTag: {
    width: 30,
    height: 30,
    borderRadius: BORDER.PILL,
    borderWidth: 2,
    borderColor: COLOR.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexGrow: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
