import { BackHandler, Dimensions, FlatList, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import VideoItem from './components/VideoItem';
import { HEIGHT } from '../../configs/constant';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useRoute, useIsFocused } from '@react-navigation/native';
import { Icon } from '../../components';
import { COLOR } from '../../configs/styles';
import { TIKTOK_LOADER_GIF } from '../../configs/source';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import * as VideoApi from '../../apis/video.api';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../store/indexSlice';
import {
  BOTTOM_NAVIGATOR_HEIGHT,
  STATUSBAR_HEIGHT,
} from '../../constants/constants';
import NotFoundData from './components/NotFoundData';

const FollowTab = () => {
  const dispatch = useDispatch();
  const timeReloadRef = useRef(0);
  const flatListRef = useRef();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

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

  const HEIGHT_ITEM = HEIGHT - bottomHeight - STATUSBAR_HEIGHT;
  const cellRefs = useRef({});

  const onViewableItemsChanged = useRef(props => {
    const changed = props.changed;
    changed.forEach(item => {
      const cell = cellRefs.current[item.key];

      if (cell) {
        if (item.isViewable) {
          dispatch(setCurrentUser(item.item.author._id));
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
      if (isFocused === true) {
        cell.playVideo();
      } else {
        cell.pauseVideo();
      }
    }
  }, [router, isFocused]);

  const fetchData = useCallback(async () => {
    try {
      const result = await VideoApi.getVideo();
      if (result.success) {
        setData([...result.data.data].reverse());
        containerValue.value = withTiming(1, { duration: 1000 });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [isRefreshing]);

  const handleFecthData = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

  useEffect(() => {
    if (isFocused && data.length === 0) handleFecthData();
  }, [handleFecthData, isFocused]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: STATUSBAR_HEIGHT,
      paddingBottom: bottomHeight,
      backgroundColor: COLOR.BACKGROUND_LOADING,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  BackHandler.addEventListener('hardwareBackPress', function () {
    const time = Date.now();
    if (time - timeReloadRef.current > 10000) {
      setIsRefreshing(true);
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
      fetchData();
      timeReloadRef.current = Date.now();
      return true;
    }

    return false;
  });
  console.log(isLoading);
  return (
    <Animated.View style={[styles.container, containerStyle]}>
      {isLoading ? (
        <Icon source={TIKTOK_LOADER_GIF} width={50} height={50} />
      ) : data.length > 0 ? (
        <FlatList
          ref={flatListRef}
          data={data}
          pagingEnabled
          onRefresh={() => setIsRefreshing(true)}
          refreshing={isRefreshing}
          renderItem={({ item, index }) => {
            return (
              <VideoItem
                ref={ref => (cellRefs.current[index] = ref)}
                index={index}
                item={item}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          initialNumToRender={0}
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
      ) : (
        <NotFoundData onPress={handleFecthData} />
      )}
    </Animated.View>
  );
};

export default FollowTab;
