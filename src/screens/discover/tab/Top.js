import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { COLOR, SPACING } from '../../../configs/styles';
import Title from '../components/Title';
import GridView from '../../../components/GridView';
import ItemSearchVideo from '../../../components/item/ItemSearchVideo';
import { AVATA_IMG } from '../../../configs/source';
import ItemUser from '../../../components/item/ItemUser';
import { useIsFocused } from '@react-navigation/native';
import * as userApi from '../../../apis/user.api';
import * as videoApi from '../../../apis/video.api';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

const Top = () => {
  const isFocusTab = useIsFocused();
  const txtSearch = useSelector(state => state.search.txtSearch);

  const [users, setUsers] = useState([]);
  const [videos, setVideos] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const getUser = userApi.getUser(txtSearch, 3);
      const getVideo = videoApi.getVideo(txtSearch);

      const [users, videos] = await Promise.all([getUser, getVideo]);

      const listUser = users.data.data.map(e => {
        const u = {
          avatar: e.avatar,
          name: e.name,
          userName: e.userName,
          follow: '14.9k',
          numVideo: e.totalVideo,
        };
        return u;
      });

      const listVideo = videos.data.data.map(e => {
        const v = {
          caption: e.caption,
          background: e.background,
          author: { avatar: e.author.avatar, name: e.author.name },
          like: e.like,
        };
        return v;
      });
      setUsers(listUser);
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

  const ListHeaderComponent = () => {
    return (
      <>
        <View style={styles.containerUser}>
          {users.length > 0 ? (
            <>
              <Title lable={'Người dùng'} />
              {users.map((item, index) => {
                return <ItemUser item={item} />;
              })}

              <View style={styles.hr} />
            </>
          ) : (
            <></>
          )}
          {videos.length > 0 ? <Title lable={'Video'} /> : <></>}
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <GridView
        data={videos}
        renderItem={item => <ItemSearchVideo item={item} />}
        NUM_COLUMS={2}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingTop: SPACING.S2,
  },
  containerUser: {
    paddingHorizontal: SPACING.S4,
  },
  hr: {
    height: 6,
    width: width,
    backgroundColor: COLOR.LIGHT_GRAY,
    marginLeft: -SPACING.S4,
    marginVertical: SPACING.S2,
  },
});
