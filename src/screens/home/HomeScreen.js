import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import { DISC_IMG, MUSIC_ICON_IMG } from '../../configs/source';
import Icon from '../../components/Icon';
import CText from '../../components/CText';
import { Column, Container, Row } from '../../components';
import { COLOR } from '../../configs/styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://v16-webapp.tiktok.com/872baa71d470b4673ae7b89877babfa1/62b4e925/video/tos/useast2a/tos-useast2a-pve-0037-aiso/bad410140e2f4173b87746d31d71977d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=5618&bt=2809&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZKTsUwe2N1GQml7Gb&mime_type=video_mp4&qs=0&rc=Zzo2ODwzOjU0ZjQ3NTU6M0BpMzR1ZTw6ZmRuPDMzZjgzM0A0LzY1Xl4tXl4xNjZgL2EuYSNgZ2QwcjQwc2lgLS1kL2Nzcw%3D%3D&l=20220623162625010251009154252C37F1',
        }}
        style={styles.video}
        resizeMode="cover"
        // paused={!isActive}
        repeat
      />

      {/* <Container
        backgroundColor={COLOR.WHITE}
        flex={1}
        width="100%"
        height={'100%'}>
        <Row>
          <Text>123</Text>
          <Text>456</Text>
          <Text>789</Text>
        </Row>
      </Container> */}

      {/* <View style={styles.bottomSection}>
        <View style={styles.bottomLeftSection}>
          <CText>@Thang</CText>
          <CText>Video này méc cười quá ae</CText>
          <View style={styles.musicNameContainer}>
            <Icon source={MUSIC_ICON_IMG} width={12} height={12} />
            <CText>Chờ yêu chill - Tiên Tiên - Dế Choắc</CText>
          </View>
        </View>
        <View style={styles.bottomRightSection}>
          <Icon source={DISC_IMG} />
        </View>
      </View> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bottomSection: {},
  bottomLeftSection: {},
  bottomRightSection: {},
  musicNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
