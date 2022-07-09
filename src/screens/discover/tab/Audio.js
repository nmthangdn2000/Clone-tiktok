import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { COLOR, SPACING } from '../../../configs/styles';
import ListView from '../../../components/ListView';
import ItemSearchAudio from '../../../components/item/ItemSearchAudio';
import { useIsFocused } from '@react-navigation/native';
import * as audioApi from '../../../apis/audio.api';
import { useSelector } from 'react-redux';

const Audio = () => {
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
      const getAudios = await audioApi.getAudios(txtSearch);

      setAudios(getAudios.data.data);
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
        renderItem={({ item }) => <ItemSearchAudio item={item} />}
      />
    </View>
  );
};

export default Audio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingTop: SPACING.S2,
  },
});
