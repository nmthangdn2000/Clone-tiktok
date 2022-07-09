import { StyleSheet } from 'react-native';
import React from 'react';
import { CInput, Container, CText } from '../../../components';
import { BORDER, COLOR, SPACING } from '../../../configs/styles';
import Video from 'react-native-video';
import { WIDTH } from '../../../configs/constant';
import ItemAddCaption from './ItemAddCaption';

const listCaption = ['# hashtag', '@ Nhắc đến', '▶ Video'];

const TopPostVideo = ({ pathVideo, caption, setCaption }) => {
  const handleCick = t => {
    const txt = caption.trim();
    setCaption(txt + ' ' + t.split(' ')[0]);
  };
  return (
    <Container>
      <Container flexDirection="row" height={140}>
        <Container
          height="100%"
          width={90}
          borderRadius={BORDER.SMALL}
          overflow="hidden">
          <Video
            source={{
              uri: 'https://v16-webapp.tiktok.com/442bbfd4f13eb153d774e944a0a2c7a9/62c9ec8c/video/tos/useast2a/tos-useast2a-pve-0037-aiso/8206b60058004b99a745210606136dc5/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2112&bt=1056&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8Z3M_ewe2NI7z2l7Gb&mime_type=video_mp4&qs=0&rc=OWhlN2lpN2dmZDRoaDszN0BpajVreDY6ZjhnZTMzZjgzM0BgYjZjYTUvXl4xYF5fLTY1YSNwYnBtcjRfZzBgLS1kL2Nzcw%3D%3D&l=2022070915000501025105814415E6B120',
            }}
            style={styles.video}
            resizeMode="cover"
            paused={true}
            muted={true}
            seek={10}
          />
          <Container
            position="absolute"
            backgroundColor={COLOR.setOpacity(COLOR.BLACK, 0.3)}
            bottom={0}
            left={0}
            right={0}
            paddingVertical={SPACING.S2}
            overflow="hidden">
            <CText color={COLOR.WHITE} textAlign="center" fontSize={12}>
              Sửa ảnh bìa
            </CText>
          </Container>
        </Container>
        <Container flexGrow={1} marginLeft={SPACING.S2}>
          <CInput
            style={styles.input}
            placeholder={
              'Hãy mô tả bài đăng, thêm hashtag hoặc nhắt đến những nhà sáng tạo đã truyền cảm hứng cho bạn'
            }
            textAlignVertical="top"
            value={caption}
            onChangeText={setCaption}
            multiline={true}
          />
        </Container>
      </Container>
      <Container flexDirection="row" marginTop={SPACING.S4}>
        {listCaption.map((e, i) => {
          return (
            <ItemAddCaption key={i} name={e} onPress={() => handleCick(e)} />
          );
        })}
      </Container>
    </Container>
  );
};

export default TopPostVideo;

const styles = StyleSheet.create({
  video: {
    flex: 1,
    borderRadius: BORDER.SMALL,
    overflow: 'hidden',
  },
  input: {
    backgroundColor: COLOR.WHITE,
    height: 200,
    padding: 0,
  },
});
