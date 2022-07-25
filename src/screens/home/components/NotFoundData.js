import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Container, CText, Icon } from '../../../components';
import { BORDER, COLOR, SPACING, TEXT } from '../../../configs/styles';
import { WIFI_OFF_ICON } from '../../../configs/source';

const NotFoundData = ({ onPress }) => {
  return (
    <Container flex={1} justifyContent="center" alignItems="center">
      <Icon
        source={WIFI_OFF_ICON}
        width={120}
        height={120}
        tintColor={COLOR.GRAY}
        marginBottom={SPACING.S2}
      />
      <CText text={TEXT.STRONG} color={COLOR.WHITE} fontSize={16}>
        Kết nói internet không ổn định
      </CText>
      <CText text={TEXT.REGULAR} color={COLOR.LIGHT_GRAY}>
        Kết nối với internet và thử lại
      </CText>
      <TouchableOpacity onPress={onPress}>
        <Container
          marginTop={200}
          width={230}
          padding={SPACING.S2}
          backgroundColor={COLOR.GRAY}
          borderRadius={BORDER.SMALL}>
          <CText text={TEXT.REGULAR} textAlign="center" color={COLOR.WHITE}>
            Thử lại
          </CText>
        </Container>
      </TouchableOpacity>
    </Container>
  );
};

export default React.memo(NotFoundData);

const styles = StyleSheet.create({});
