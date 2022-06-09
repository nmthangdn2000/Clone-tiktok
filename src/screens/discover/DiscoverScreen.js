import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CInput from '../../components/CInput';
import { SEARCH_IMG } from '../../configs/source';
import { COLOR, SPACING } from '../../configs/styles';
import TopTab from './TopTab';
import ItemSearchHistory from '../../components/item/ItemSearchHistory';
import Title from './components/Title';
import ItemSearchTrend from '../../components/item/ItemSearchTrend';

const DiscoverScreen = () => {
  const [txtSearch, setTxtSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <CInput
          iconLeft={SEARCH_IMG}
          placeholder={'Tìm kiếm'}
          value={txtSearch}
          onChangeText={text => setTxtSearch(text)}
        />
      </View>
      <ItemSearchHistory
        text={'Thầy ông nội'}
        onPress={() => console.log('aaa')}
      />
      <ItemSearchHistory
        text={'Thầy ông nội'}
        onPress={() => console.log('aaa')}
      />
      <Title lable={'Tìm kiếm được đề xuất'} />
      <ItemSearchTrend
        text={'Lịch thi đấu bóng đá U23 Việt Nam q wq eqwe qư e'}
      />
      <ItemSearchTrend text={'Lịch thi đấu bóng đá U23 Việt Nam'} />
      <ItemSearchTrend text={'Lịch thi đấu bóng đá U23 Việt Nam'} />
      {/* <TopTab /> */}
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: SPACING.S4,
  },
  searchBar: {
    paddingVertical: SPACING.S4,
  },
});
