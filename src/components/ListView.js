import { StyleSheet, FlatList } from 'react-native';
import React from 'react';

const ListView = ({ data, renderItem, style = {} }) => {
  return (
    <FlatList
      scrollEventThrottle={16}
      // onScroll={scrollHandle}
      //   contentContainerStyle={[styles.flatListOption, style]}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollToOverflowEnabled={true}
    />
  );
};

export default ListView;

const styles = StyleSheet.create({
  flatListOption: {},
});
