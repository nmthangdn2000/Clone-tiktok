import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR, SPACING } from '../../../configs/styles';
import ListView from '../../../components/ListView';
import { AVATA_IMG } from '../../../configs/source';
import ItemSearchSuggestions from '../../../components/item/ItemSearchSuggestions';

const SuggestionsSearch = () => {
  const data = [
    {
      text: 'thang dep trai',
      onPress: () => console.log('thang dep trai'),
      avatar: AVATA_IMG,
    },
    {
      text: 'thang dep trai',
      onPress: () => console.log('thang dep trai'),
      avatar: AVATA_IMG,
    },
    {
      text: 'thang dep trai',
      onPress: () => console.log('thang dep trai'),
      avatar: AVATA_IMG,
    },
  ];
  return (
    <View style={styles.container}>
      <ListView
        data={data}
        renderItem={item => <ItemSearchSuggestions item={item} />}
      />
    </View>
  );
};

export default SuggestionsSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: SPACING.S4,
  },
});
