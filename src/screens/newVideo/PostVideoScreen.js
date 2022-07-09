import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, CText, Icon } from '../../components';
import {
  ARROW_BACK_IMG,
  ARROW_BACK_IOS_ICON,
  ARROW_FORWARD_IOS_ICON,
  FIBER_SMART_RECORD_ICON,
  LOCK_OUTLINE_ICON,
  MESSAGE_OUTLINE_ICON,
  MORE_HORIZ_ICON,
  PLACE_ICON,
  STITCH_ICON,
  USER_IMG,
} from '../../configs/source';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import Video from 'react-native-video';
import TopPostVideo from './components/TopPostVideo';
import ItemChoose from './components/ItemChoose';
import ItemAddCaption from './components/ItemAddCaption';

const listAddress = [
  'Hòa Vang',
  'Đà Nẵng',
  'Công viên APEC',
  'Bà Nà Hills',
  'sun world bà nà hills',
  'công viên châu á',
];

const PostVideoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [caption, setCaption] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Đăng',
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerLeft: () => (
        <Icon
          source={ARROW_BACK_IMG}
          tintColor={COLOR.BLACK}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  const CaptionView = () => {
    const listText = caption.split(' ');

    return (
      <CText color={COLOR.LIGHT_GRAY2}>
        {listText.map((item, index) => {
          if (item.trim()[0] === '#') {
            return (
              <CText key={index} color={COLOR.LIGHT_GRAY2} text={TEXT.STRONG}>
                {item.trim()}{' '}
              </CText>
            );
          }
          return item.trim() + ' ';
        })}
      </CText>
    );
  };

  return (
    <Container
      flex={1}
      backgroundColor={COLOR.WHITE}
      paddingHorizontal={SPACING.S4}>
      <StatusBar
        barStyle={'dark-content'}
        animated={true}
        backgroundColor={COLOR.WHITE}
        translucent={false}
      />
      <TopPostVideo
        // pathVideo={route.params.pathVideo}
        caption={caption}
        setCaption={text => setCaption(text)}
      />
      <ItemChoose
        iconLeft={USER_IMG}
        name={'Gắn thẻ mọi người'}
        iconRight={ARROW_FORWARD_IOS_ICON}
      />
      <ItemChoose
        iconLeft={PLACE_ICON}
        name={'Vị trí'}
        iconRight={ARROW_FORWARD_IOS_ICON}
      />
      <Container marginBottom={SPACING.S2}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollToOverflowEnabled={true}>
          {listAddress.map((e, i) => {
            return <ItemAddCaption name={e} key={i} />;
          })}
        </ScrollView>
      </Container>
      <ItemChoose
        iconLeft={LOCK_OUTLINE_ICON}
        name={'Ai có thể xem video này'}
        iconRight={ARROW_FORWARD_IOS_ICON}
      />
      <ItemChoose iconLeft={MESSAGE_OUTLINE_ICON} name={'Cho phép bình luận'} />
      <ItemChoose iconLeft={FIBER_SMART_RECORD_ICON} name={'Cho phép Duet'} />
      <ItemChoose iconLeft={STITCH_ICON} name={'Cho phép Stitch'} />
      <ItemChoose
        iconLeft={MORE_HORIZ_ICON}
        name={'Tùy chọn khác'}
        iconRight={ARROW_FORWARD_IOS_ICON}
      />
      <View style={styles.actionBottom}>
        <Pressable style={[styles.button, { backgroundColor: COLOR.WHITE }]}>
          <CText onPress={() => navigation.goBack()}>Nháp</CText>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: COLOR.DANGER2 }]}>
          <CText
            color={COLOR.WHITE}
            onPress={() =>
              // navigation.navigate('PostVideoScreen', { pathVideo })
              console.log('adad')
            }>
            Đăng
          </CText>
        </Pressable>
      </View>
    </Container>
  );
};

export default PostVideoScreen;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: BORDER.SMALL,
    borderWidth: 1,
    borderColor: COLOR.LIGHT_GRAY,
  },
  actionBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
