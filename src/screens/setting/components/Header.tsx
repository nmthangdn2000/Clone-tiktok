import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Container, Icon } from '../../../components';
import { SPACING } from '../../../configs/styles';
import Avatar from '../../../components/Avatar';
import { AVATA_IMG } from '../../../configs/source';
import { STATUSBAR_HEIGHT } from '../../../constants/constants';

const Header = ({ uri }) => {
  return (
    <Container
      marginVertical={SPACING.S4}
      width={'100%'}
      marginTop={Number(STATUSBAR_HEIGHT) + 49.1 + SPACING.S4}
      flexDirection="row"
      justifyContent="space-around">
      <Avatar uri={AVATA_IMG} />
      <Avatar uri={AVATA_IMG} />
    </Container>
  );
};

export default React.memo(Header);
