import React from 'react';
import { Tabs } from 'react-native-collapsible-tab-view';
import ItemVideo from '../../components/ItemVideo';

const NUM_COLUMS = 3;

const ListVideo = ({ dataList, scrollHandle }) => {
  const formatData = (dataL, numColumns) => {
    const totalRows = Math.floor(dataL.length / numColumns);
    let totalLastRow = dataL.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataL.push({ key: 'blank', empty: true });
      totalLastRow++;
    }
    return dataL;
  };

  return (
    <Tabs.FlatList
      scrollEventThrottle={16}
      // onScroll={scrollHandle}
      // contentContainerStyle={[styles.flatListOption]}
      data={formatData(dataList, NUM_COLUMS)}
      renderItem={(item, index) => (
        <ItemVideo item={item} index={index} NUM_COLUMS={NUM_COLUMS} />
      )}
      numColumns={NUM_COLUMS}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollToOverflowEnabled={true}
    />
  );
};

export default ListVideo;
