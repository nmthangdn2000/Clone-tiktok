import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ItemSearchHistory from '../../../components/item/ItemSearchHistory';
import Title from './Title';
import ItemSearchTrend from '../../../components/item/ItemSearchTrend';
import { SPACING } from '../../../configs/styles';
import ItemSearchSuggestions from '../../../components/item/ItemSearchSuggestions';

const DefaultSearch = () => {
  return (
    <View style={styles.container}>
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
      <ItemSearchTrend
        text={'Lịch thi đấu bóng đá U23 Việt Nam q wq eqwe qư e'}
      />
      <ItemSearchTrend
        text={'Lịch thi đấu bóng đá U23 Việt Nam q wq eqwe qư e'}
      />
      <ItemSearchTrend
        text={'Lịch thi đấu bóng đá U23 Việt Nam q wq eqwe qư e'}
      />
      <ItemSearchTrend
        text={'Lịch thi đấu bóng đá U23 Việt Nam q wq eqwe qư e'}
      />
    </View>
  );
};

export default DefaultSearch;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.S4,
  },
});
