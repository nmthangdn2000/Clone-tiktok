import { FlatList, View, StatusBar } from 'react-native';
import React, { useCallback, useState } from 'react';
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

  return (
    <View>
      <FlatList
        data={data}
        pagingEnabled
        renderItem={({ index }) => {
          return <VideoItem isActive={activeVideoIndex === index} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        onScroll={e => {
          const index = Math.round(
            e.nativeEvent.contentOffset.y /
              (HEIGHT - bottomHeight - StatusBar.currentHeight),
          );
          setActiveVideoIndex(index);
        }}
      />
    </View>
  );
};

export default HomeScreen;
