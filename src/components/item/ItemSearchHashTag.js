import { StyleSheet, View } from 'react-native';
import React from 'react';
import CText from '../CText';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';

const ItemSearchHashTag = ({ item }) => {
  const { name, view } = item;
  return (
    <View style={styles.container}>
      <View style={styles.iconHashTag}>
        <CText text={TEXT.STRONG} fontSize={16}>
          #
        </CText>
      </View>
      <View style={styles.content}>
        <CText
          text={TEXT.REGULAR}
          fontSize={16}
          color={COLOR.BLACK}
          numberOfLines={1}>
          {name}
        </CText>
        <CText text={TEXT.REGULAR} color={COLOR.GRAY}>
          {view > 0 ? view : 123} lượt xem
        </CText>
      </View>
    </View>
  );
};

export default ItemSearchHashTag;

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
    borderColor: COLOR.LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginLeft: SPACING.S2,
    flexGrow: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
