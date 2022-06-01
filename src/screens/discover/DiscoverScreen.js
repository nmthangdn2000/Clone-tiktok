import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CInput from '../../components/CInput';
import { SEARCH_IMG } from '../../configs/source';
import { COLOR, SPACING } from '../../configs/styles';
import TopTab from './TopTab';

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

      <TopTab />
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
