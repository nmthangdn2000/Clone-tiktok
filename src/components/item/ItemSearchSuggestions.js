import { StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';

import { CALL_RECEIVED_IMG, SEARCH_IMG } from '../../configs/source';
import Icon from '../Icon';
import CText from '../CText';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';

import { useDispatch } from 'react-redux';
import { setTxtSearch } from '../../store/searchSlice';
import { urlSourceMedia } from '../../utils/utils';

const ItemSearchSuggestions = ({ item }) => {
  const { text, avatar } = item.item;
  const dispatch = useDispatch();

  return (
    <Pressable
      style={styles.container}
      onPress={() => dispatch(setTxtSearch(text))}>
      <Icon
        source={SEARCH_IMG}
        tintColor={COLOR.setOpacity(COLOR.BLACK, 0.6)}
        height={22}
        width={22}
      />
      <CText
        flex={1}
        marginLeft={SPACING.S2}
        text={TEXT.REGULAR}
        color={COLOR.setOpacity(COLOR.BLACK, 0.8)}
        fontSize={16}
        numberOfLines={1}>
        {text}
      </CText>
      <Image source={{ uri: urlSourceMedia(avatar) }} style={styles.avatar} />
      <Icon
        source={CALL_RECEIVED_IMG}
        tintColor={COLOR.setOpacity(COLOR.BLACK, 0.6)}
        height={22}
        width={22}
        onPress={() => dispatch(setTxtSearch(text))}
      />
    </Pressable>
  );
};

export default ItemSearchSuggestions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.S1,
    alignItems: 'center',
  },
  txt: {
    flex: 1,
    marginLeft: SPACING.S2,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: BORDER.PILL,
    marginRight: SPACING.S4,
  },
});
