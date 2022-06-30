import { FlatList, StatusBar, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import VideoItem from './components/VideoItem';
import { HEIGHT } from '../../configs/constant';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useRoute, useIsFocused } from '@react-navigation/native';
import { Container, Icon } from '../../components';
import { COLOR } from '../../configs/styles';
import { TIKTOK_LOADER_GIF } from '../../configs/source';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const statusbarHeight = StatusBar.currentHeight;

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const containerValue = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        containerValue.value,
        [0, 1],
        [COLOR.BACKGROUND_LOADING, COLOR.BLACK],
      ),
    };
  }, []);

  const router = useRoute();
  const isFocused = useIsFocused();
  const bottomHeight = useBottomTabBarHeight();

  const videoPlaying = useRef();

  const HEIGHT_ITEM = HEIGHT - bottomHeight - StatusBar.currentHeight;
  const cellRefs = useRef({});

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

  const onViewableItemsChanged = useRef(props => {
    const changed = props.changed;
    changed.forEach(item => {
      const cell = cellRefs.current[item.key];
      if (cell) {
        if (item.isViewable) {
          cell.playVideo();
          videoPlaying.current = item.key;
        } else {
          cell.pauseVideo();
        }
      }
    });
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 80,
  }).current;

  useEffect(() => {
    const cell = cellRefs.current[videoPlaying.current];
    if (cell) {
      if (router.name === 'Trang chủ' && isFocused === true) {
        cell.playVideo();
      } else {
        cell.pauseVideo();
      }
    }
  }, [router, isFocused]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      containerValue.value = withTiming(1, { duration: 1000 });
    }, 3000);
  }, [containerValue]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: statusbarHeight,
      paddingBottom: bottomHeight,
      backgroundColor: COLOR.BACKGROUND_LOADING,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      {isLoading ? (
        <Icon source={TIKTOK_LOADER_GIF} width={50} height={50} />
      ) : (
        <FlatList
          data={data}
          pagingEnabled
          renderItem={({ index }) => {
            return (
              <VideoItem
                ref={ref => (cellRefs.current[index] = ref)}
                index={index}
              />
            );
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
          getItemLayout={(_data, index) => ({
            length: HEIGHT_ITEM,
            offset: HEIGHT_ITEM * index,
            index,
          })}
        />
      )}
    </Animated.View>
  );
};

export default HomeScreen;
