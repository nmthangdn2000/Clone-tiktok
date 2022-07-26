import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Container, CText, Icon } from '../../../components';
import { BORDER, COLOR, SPACING } from '../../../configs/styles';
import Avatar from '../../../components/Avatar';
import {
  AVATA_IMG,
  PHOTO_CAMERA_ICON,
  VIDEOCAMR_IMG,
  VIDEOCAM_OUTLINE_ICON,
} from '../../../configs/source';
import { STATUSBAR_HEIGHT } from '../../../constants/constants';

const Header = ({ data }) => {
  const Media = ({ uri, icon, text }) => {
    return (
      <Container justifyContent="center">
        <Container width={96} height={96}>
          <Avatar uri={uri} />
          <Container
            width={'100%'}
            height={'100%'}
            position="absolute"
            borderRadius={BORDER.PILL}
            backgroundColor={COLOR.setOpacity(COLOR.BLACK, 0.2)}
            justifyContent="center"
            alignItems="center">
            <Icon
              width={34}
              height={34}
              source={icon}
              tintColor={COLOR.WHITE}
            />
          </Container>
        </Container>
        <CText fontSize={15} marginTop={SPACING.S2}>
          {text}
        </CText>
      </Container>
    );
  };
  return (
    <Container
      marginVertical={SPACING.S4}
      width={'100%'}
      marginTop={Number(STATUSBAR_HEIGHT) + 49.1 + SPACING.S5}
      flexDirection="row"
      justifyContent="space-around">
      <Media icon={PHOTO_CAMERA_ICON} text="Thay đổi ảnh" uri={AVATA_IMG} />
      <Media
        icon={VIDEOCAM_OUTLINE_ICON}
        text="Thay đổi video"
        uri={AVATA_IMG}
      />
    </Container>
  );
};

export default React.memo(Header);
