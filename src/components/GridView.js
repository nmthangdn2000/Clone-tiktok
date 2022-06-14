import { FlatList } from 'react-native';
import React from 'react';
import ItemSearchVideo from './item/ItemSearchVideo';

const GridView = ({ dataList, scrollHandle, NUM_COLUMS = 2 }) => {
  const formatData = (dataL, numColumns) => {
    const totalRows = Math.floor(dataL.length / numColumns);
    let totalLastRow = dataL.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataL.push({ empty: true });
      totalLastRow++;
    }
    return dataL;
  };

  return (
    <FlatList
      scrollEventThrottle={16}
      // onScroll={scrollHandle}
      // contentContainerStyle={[styles.flatListOption]}
      data={formatData(dataList, NUM_COLUMS)}
      renderItem={(item, index) => (
        <ItemSearchVideo item={item} index={index} />
      )}
      numColumns={NUM_COLUMS}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollToOverflowEnabled={true}
    />
  );
};

export default GridView;
