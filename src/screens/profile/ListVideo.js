import { StyleSheet, FlatList, Dimensions, View, Text } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import { Tabs } from 'react-native-collapsible-tab-view';

const NUM_COLUMS = 3;
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

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

  const renderItem = data => {
    return (
      <View
        key={data.index}
        style={{
          height: WIDTH / NUM_COLUMS,
          margin: 1,
          flex: 1,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{data.item.key}</Text>
      </View>
    );
  };

  return (
    <Tabs.FlatList
      scrollEventThrottle={16}
      // onScroll={scrollHandle}
      // contentContainerStyle={[styles.flatListOption]}
      data={formatData(dataList, NUM_COLUMS)}
      renderItem={renderItem}
      numColumns={NUM_COLUMS}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollToOverflowEnabled={true}
    />
  );
};

export default ListVideo;

const styles = StyleSheet.create({
  flatListOption: {
    height: HEIGHT + 100000,
  },
});
