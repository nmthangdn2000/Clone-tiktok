import { StatusBar, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import CInput from '../../components/CInput';
import { CLOSE_IMG, SEARCH_IMG } from '../../configs/source';
import { COLOR, SPACING, TEXT } from '../../configs/styles';
import TopTab from './TopTab';

import { useDispatch, useSelector } from 'react-redux';
import { setTxtSearch } from '../../store/searchSlice';
import CText from '../../components/CText';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const DiscoverScreen = () => {
  const dispatch = useDispatch();

  const txtSearch = useSelector(state => state.search.txtSearch);

  const marginRight = useSharedValue(0);
  const opacity = useSharedValue(0);

  const searchInputStyle = useAnimatedStyle(() => {
    return {
      marginRight: withTiming(marginRight.value, {
        duration: 300,
        easing: Easing.linear,
      }),
    };
  }, []);

  const buttonSearchStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 500,
        easing: Easing.linear,
      }),
    };
  }, []);

  useEffect(() => {
    if (txtSearch?.length > 0) {
      marginRight.value = SPACING.S10 + SPACING.S4;
      opacity.value = 1;
    } else {
      marginRight.value = 0;
      opacity.value = 0;
    }
  }, [txtSearch, marginRight, opacity]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Animated.View style={[styles.searchInput, searchInputStyle]}>
          <CInput
            iconLeft={SEARCH_IMG}
            placeholder={'Tìm kiếm'}
            value={txtSearch}
            iconRight={txtSearch?.length > 0 ? CLOSE_IMG : null}
            onPressIconRight={() => dispatch(setTxtSearch(''))}
            onChangeText={text => dispatch(setTxtSearch(text))}
          />
        </Animated.View>
        <Animated.View style={[styles.buttonSearch, buttonSearchStyle]}>
          <CText
            text={TEXT.REGULAR}
            color={COLOR.DANGER2}
            onPress={() => console.log('text')}>
            Tìm kiếm
          </CText>
        </Animated.View>
      </View>

      <TopTab />
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  searchBar: {
    paddingVertical: SPACING.S4,
    paddingHorizontal: SPACING.S4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flexGrow: 1,
    // marginRight: SPACING.S10 + SPACING.S4,
  },
  buttonSearch: {
    position: 'absolute',
    right: SPACING.S4,
    opacity: 0,
    zIndex: -1,
  },
});
