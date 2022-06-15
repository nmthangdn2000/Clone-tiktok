import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CInput from '../../components/CInput';
import { SEARCH_IMG } from '../../configs/source';
import { COLOR, SPACING } from '../../configs/styles';
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

const DiscoverScreen = () => {
  const [txtSearch, setTxtSearch] = useState('');
  const data = {
    avatar: '',
    name: 'Thang321',
    userName: 'Thang321',
    follow: '14.9k',
    numVideo: 60,
  };

  const dataList = [
    {
      caption: 'Là ai đã từ bỏ?',
      background: AVATA_IMG,
      author: { avatar: AVATA_IMG, name: 'Thang321' },
      like: 120,
    },
    {
      caption: 'Là ai đã từ bỏ?',
      background: AVATA_IMG,
      author: { avatar: AVATA_IMG, name: 'Thang321 qwe qwe qwe ' },
      like: 120,
    },
    {
      caption: 'Là ai đã từ bỏ?',
      background: AVATA_IMG,
      author: { avatar: AVATA_IMG, name: 'Thang321' },
      like: 120,
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        animated={true}
        backgroundColor="white"
      />
      <View style={styles.searchBar}>
        <CInput
          iconLeft={SEARCH_IMG}
          placeholder={'Tìm kiếm'}
          value={txtSearch}
          onChangeText={text => setTxtSearch(text)}
        />
      </View>
      <DefaultSearch />
      {/* <ItemSearchAudio />
      <ItemSearchAudio />
      <IteamSearchHashTag /> */}
      {/* <ItemSearchTrend text={'Lịch thi đấu bóng đá U23 Việt Nam'} />
      <ItemSearchTrend text={'Lịch thi đấu bóng đá U23 Việt Nam'} />

      <ItemUser data={data} />
      <ItemUser data={data} /> */}

      {/* <GridView dataList={dataList} /> */}
      {/* <TopTab /> */}
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
  },
});
