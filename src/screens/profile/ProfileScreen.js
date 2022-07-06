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

  const fetchData = useCallback(async () => {
    try {
      const id = route.params.id ? route.params.id : currentUser;
      const dataUser = userApi.getUserById(id);
      const dataVideo = videoApi.getVideoByUserId(id);

      const [userInfor, listVideo] = await Promise.all([dataUser, dataVideo]);
      setUser(userInfor.data);
      setVideos(listVideo.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [currentUser, route]);

  useEffect(() => {
    console.log(isFocused);
    if (isFocused) {
      fetchData();
    }
  }, [isFocused, fetchData]);

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
        <Tabs.Tab name="HEARTICON_LOCK_IMG">
          {/* <ListVideo dataList={[]} /> */}
        </Tabs.Tab>
      </Tabs.Container>
    </Container>
  );
};

export default ProfileScreen;
