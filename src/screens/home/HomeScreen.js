import { FlatList, View, StatusBar, Text } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import VideoItem from './components/VideoItem';
import { HEIGHT } from '../../configs/constant';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  const bottomHeight = useBottomTabBarHeight();
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const data = [
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4' },
    { key: '5' },
    { key: '6' },
    { key: '7' },
    { key: '8' },
    { key: '9' },
    { key: '10' },
    { key: '11' },
    { key: '6' },
    { key: '7' },
    { key: '8' },
    { key: '9' },
    { key: '10' },
  ];

  const Item = useCallback(
    ({ index }) => {
      return <VideoItem isActive={activeVideoIndex === index} />;
    },
    [activeVideoIndex],
  );

  const onViewableItemsChanged = useRef(props => {
    const changed = props.changed;
    const cell = changed.find(c => c.isViewable === true);
    setActiveVideoIndex(cell?.index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 80,
  }).current;
  return (
    <View>
      <FlatList
        data={data}
        pagingEnabled
        renderItem={({ index }) => {
          return <VideoItem isActive={activeVideoIndex === index} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        removeClippedSubviews={true}
        windowSize={5}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

export default HomeScreen;
