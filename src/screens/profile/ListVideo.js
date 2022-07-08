import React from 'react';
import { Tabs } from 'react-native-collapsible-tab-view';
import { Container, CText } from '../../components';
import ItemVideo from '../../components/item/ItemVideo';
import { SPACING } from '../../configs/styles';

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
  if (dataList && dataList.length > 0) {
    return (
      <Tabs.FlatList
        scrollEventThrottle={16}
        data={formatData(dataList, NUM_COLUMS)}
        renderItem={({ item, index }) => (
          <ItemVideo item={item} index={index} NUM_COLUMS={NUM_COLUMS} />
        )}
        numColumns={NUM_COLUMS}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollToOverflowEnabled={true}
      />
    );
  } else {
    return (
      <Tabs.ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollToOverflowEnabled={true}>
        <Container width={'100%'} marginTop={SPACING.S4}>
          <CText textAlign="center">Hiện không có video nào</CText>
        </Container>
      </Tabs.ScrollView>
    );
  }
};

export default ListVideo;
