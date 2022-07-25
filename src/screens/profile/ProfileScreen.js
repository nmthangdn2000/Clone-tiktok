import { StatusBar } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import User from './User';
import { Tabs } from 'react-native-collapsible-tab-view';
import ListVideo from './ListVideo';
import { Container, Icon, Row } from '../../components';
import { COLOR, SPACING } from '../../configs/styles';
import { ARROW_BACK_IMG, MORE_VERT_IMG } from '../../configs/source';
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import * as userApi from '../../apis/user.api';
import * as videoApi from '../../apis/video.api';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_STORAGE } from '../../constants/constants';

const statusbarHeight = StatusBar.currentHeight;

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
const ProfileScreen = () => {
  const isFocused = useIsFocused();

  const currentUser = useSelector(state => state.index.currentUser);

  const route = useRoute();
  const showHeader = route.params.showHeader;
  const navigation = useNavigation();

  const [user, setUser] = useState(null);
  const [videos, setVideos] = useState([]);
  const [videosLike, setVideosLike] = useState([]);
  const [videoPrivate, setVideoPrivate] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      let dataVideo = null;
      let id = null;
      let token = null;
      // user id và privacy.like true thì get 2 loại
      // user id và privacy.like false thì get 1 loại
      // user auth thì lấy hết
      if (!showHeader) {
        token = await AsyncStorage.getItem(KEY_STORAGE.TOKEN);
        id = await AsyncStorage.getItem(KEY_STORAGE.ID_USER);
        dataVideo = videoApi.getVideoByUserAuth(token);
      } else {
        id = route.params.id ? route.params.id : currentUser;
        dataVideo = videoApi.getVideoByUserId(id);
      }
      const dataUser = userApi.getUserById(id);

      const [userInfor, listVideo] = await Promise.all([dataUser, dataVideo]);
      console.log(userInfor.data);
      setUser(userInfor.data);
      setVideos(listVideo.data.data || []);

      let getVidesLike = [];
      if (!showHeader && userInfor.data.privacy.like) {
        getVidesLike = await videoApi.getVideoLikeByUserAuth(token);
      } else {
        getVidesLike = await videoApi.getVideoLikeByIdUser(userInfor.data._id);
      }

      setVideosLike(getVidesLike.data || []);

      if (!showHeader) {
        const videoP = await videoApi.getVideoByUserAuth(token, true);
        setVideoPrivate(videoP.data.data || []);
      }
    } catch (error) {
      console.log(error);
    }
  }, [currentUser, route, showHeader]);

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused, fetchData, showHeader]);

  return (
    <Container
      flex={1}
      paddingBottom={!showHeader ? 49.1 : 0}
      backgroundColor={COLOR.WHITE}>
      {showHeader ? (
        <>
          <Container
            zIndex={1}
            height={statusbarHeight}
            backgroundColor={COLOR.WHITE}
          />

          <Container
            zIndex={1}
            backgroundColor={COLOR.WHITE}
            height={48}
            justifyContent="center"
            paddingHorizontal={SPACING.S4}
            borderBottomColor={COLOR.LIGHT_GRAY}
            borderBottomWidth={0.19}>
            <Row justifyContent="space-between">
              <Icon
                source={ARROW_BACK_IMG}
                onPress={() => navigation.goBack()}
              />
              <Icon source={MORE_VERT_IMG} />
            </Row>
          </Container>
        </>
      ) : null}
      <Tabs.Container renderHeader={() => <User user={user} />}>
        <Tabs.Tab name="SELECTED_IMG">
          <ListVideo dataList={videos} />
        </Tabs.Tab>

        {!showHeader ? (
          <Tabs.Tab name={'LOCK_OUTLINE_ICON'}>
            <ListVideo dataList={videoPrivate} />
          </Tabs.Tab>
        ) : null}

        <Tabs.Tab
          name={
            user?.privacy.like ? 'HEARTICON_LOCK_IMG' : 'HEART_OUTLINE_IMG'
          }>
          <ListVideo dataList={videosLike} />
        </Tabs.Tab>
      </Tabs.Container>
    </Container>
  );
};

export default ProfileScreen;
