import { StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { COLOR, SPACING } from '../../../configs/styles';
import ItemSearchHashTag from '../../../components/item/ItemSearchHashTag';
import ListView from '../../../components/ListView';
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import * as hashtagApi from '../../../apis/hashtag.api';

const Hashtag = () => {
  // const data = [
  //   { key: '1' },
  //   { key: '2' },
  //   { key: '3' },
  //   { key: '4' },
  //   { key: '5' },
  //   { key: '6' },
  //   { key: '7' },
  //   { key: '8' },
  //   { key: '9' },
  //   { key: '10' },
  //   { key: '11' },
  //   { key: '6' },
  //   { key: '7' },
  //   { key: '8' },
  //   { key: '9' },
  //   { key: '10' },
  // ];

  const isFocusTab = useIsFocused();

  const txtSearch = useSelector(state => state.search.txtSearch);

  const [audios, setAudios] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const getAudios = await hashtagApi.getHashtags(txtSearch);

      setAudios(getAudios.data);
    } catch (error) {
      console.log(error);
    }
  }, [txtSearch]);

  useEffect(() => {
    if (isFocusTab) {
      fetchData();
    }
  }, [isFocusTab, fetchData]);
  return (
    <View style={styles.container}>
      <ListView
        data={audios}
        renderItem={({ item }) => <ItemSearchHashTag item={item} />}
      />
    </View>
  );
};

export default Hashtag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingTop: SPACING.S2,
  },
});
