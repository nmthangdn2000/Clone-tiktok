import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { COLOR, SPACING } from '../../../configs/styles';
import GridView from '../../../components/GridView';
import ItemSearchVideo from '../../../components/item/ItemSearchVideo';
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import * as videoApi from '../../../apis/video.api';

const Video = () => {
  const isFocusTab = useIsFocused();
  const txtSearch = useSelector(state => state.search.txtSearch);

  const [videos, setVideos] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const getVideo = await videoApi.getVideo(txtSearch);

      const listVideo = getVideo.data.data.map(e => {
        const v = {
          caption: e.caption,
          background: e.background,
          author: { avatar: e.author.avatar, name: e.author.name },
          like: e.like,
        };
        return v;
      });

      setVideos(listVideo);
    } catch (error) {
      console.log(error);
    }
  }, [txtSearch]);

  useEffect(() => {
    if (isFocusTab) {
      fetchData();
    }
  }, [isFocusTab, fetchData]);

  return (
    <View style={styles.container}>
      <GridView
        data={videos}
        renderItem={({ item }) => <ItemSearchVideo item={item} />}
        NUM_COLUMS={2}
      />
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingTop: SPACING.S2,
  },
});
