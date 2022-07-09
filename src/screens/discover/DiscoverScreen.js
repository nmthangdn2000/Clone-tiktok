import { StatusBar, StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import CInput from '../../components/CInput';
import { CLOSE_IMG, SEARCH_IMG } from '../../configs/source';
import { COLOR, SPACING, TEXT } from '../../configs/styles';
import TopTab from './TopTab';
import SuggestionsSearch from './components/SuggestionsSearch';
import DefaultSearch from './components/DefaultSearch';

import { useDispatch, useSelector } from 'react-redux';
import { setTxtSearch } from '../../store/searchSlice';
import CText from '../../components/CText';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Container } from '../../components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_STORAGE } from '../../constants/constants';

const statusbarHeight = StatusBar.currentHeight;

const DiscoverScreen = () => {
  const bottomHeight = useBottomTabBarHeight();
  const dispatch = useDispatch();

  const [isFocus, setIsFocus] = useState(false);
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

  const handleSearch = useCallback(async () => {
    try {
      let searchHis = await AsyncStorage.getItem(KEY_STORAGE.SEARCH_HIS);
      if (!searchHis) {
        searchHis = [];
      } else {
        searchHis = JSON.parse(searchHis);
      }
      if (!searchHis.includes(txtSearch) || txtSearch.trim().length === 0) {
        console.log(txtSearch.trim().length);
        searchHis.push(txtSearch);
        await AsyncStorage.setItem(
          KEY_STORAGE.SEARCH_HIS,
          JSON.stringify(searchHis),
        );
      }
      setIsFocus(false);
    } catch (error) {
      console.log(error);
    }
  }, [txtSearch]);

  return (
    <Container
      flex={1}
      paddingTop={statusbarHeight}
      paddingBottom={bottomHeight}
      backgroundColor={COLOR.WHITE}>
      <View style={styles.searchBar}>
        <Animated.View style={[styles.searchInput, searchInputStyle]}>
          <CInput
            onFocus={() => setIsFocus(true)}
            iconLeft={SEARCH_IMG}
            placeholder={'Tìm kiếm'}
            value={txtSearch}
            iconRight={txtSearch?.length > 0 ? CLOSE_IMG : null}
            onPressIconRight={() => dispatch(setTxtSearch(''))}
            onChangeText={text => dispatch(setTxtSearch(text))}
            returnKeyType={'search'}
            onSubmitEditing={handleSearch}
          />
        </Animated.View>
        <Animated.View style={[styles.buttonSearch, buttonSearchStyle]}>
          <CText
            text={TEXT.REGULAR}
            color={COLOR.DANGER2}
            onPress={handleSearch}>
            Tìm kiếm
          </CText>
        </Animated.View>
      </View>

      {txtSearch?.length < 1 ? (
        <DefaultSearch />
      ) : isFocus ? (
        <SuggestionsSearch />
      ) : (
        <TopTab />
      )}
    </Container>
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
