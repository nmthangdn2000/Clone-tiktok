import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CInput from '../../components/CInput';
import { CLOSE_IMG, SEARCH_IMG } from '../../configs/source';
import { COLOR, SPACING, TEXT } from '../../configs/styles';
import TopTab from './TopTab';
import ItemSearchHistory from '../../components/item/ItemSearchHistory';
import Title from './components/Title';
import ItemSearchTrend from '../../components/item/ItemSearchTrend';
import ItemUser from '../../components/item/ItemUser';
import GridView from '../../components/GridView';

import { AVATA_IMG, HEART_OUTLINE_IMG } from '../../configs/source';
import ItemSearchAudio from '../../components/item/ItemSearchAudio';
import IteamSearchHashTag from '../../components/item/IteamSearchHashTag';
import DefaultSearch from './components/DefaultSearch';

import { useDispatch, useSelector } from 'react-redux';
import { setTxtSearch } from '../../store/searchSlice';
import SuggestionsSearch from './components/SuggestionsSearch';
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
  }, [txtSearch]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        animated={true}
        backgroundColor="white"
      />
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

      {/* {txtSearch?.length > 0 ? <SuggestionsSearch /> : <DefaultSearch />} */}

      {/* <ItemUser data={data} />
      <ItemUser data={data} />  */}

      {/* <GridView dataList={dataList} /> */}
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
