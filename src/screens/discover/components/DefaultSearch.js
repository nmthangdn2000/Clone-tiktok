import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import ItemSearchHistory from '../../../components/item/ItemSearchHistory';
import Title from './Title';
import ItemSearchTrend from '../../../components/item/ItemSearchTrend';
import { SPACING } from '../../../configs/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_STORAGE } from '../../../constants/constants';
import { useDispatch } from 'react-redux';
import { setTxtSearch } from '../../../store/searchSlice';
const DefaultSearch = () => {
  const dispatch = useDispatch();

  const [searchHis, setSearchHis] = useState([]);

  const fetchSearchHis = useCallback(async () => {
    try {
      const data = await AsyncStorage.getItem(KEY_STORAGE.SEARCH_HIS);
      setSearchHis(JSON.parse(data));
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchSearchHis();
  }, [fetchSearchHis]);

  const handleRemoveSearchHis = useCallback(
    async index => {
      try {
        const newSearchHis = [...searchHis];
        newSearchHis.splice(index, 1);
        setSearchHis(newSearchHis);
        await AsyncStorage.setItem(
          KEY_STORAGE.SEARCH_HIS,
          JSON.stringify(newSearchHis),
        );
      } catch (error) {
        console.log(error);
      }
    },
    [searchHis],
  );

  return (
    <View style={styles.container}>
      {searchHis?.map((s, i) => {
        return (
          <ItemSearchHistory
            key={i}
            text={s}
            handleRemoveSearchHis={() => handleRemoveSearchHis(i)}
            onPress={() => dispatch(setTxtSearch(s))}
          />
        );
      })}

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
