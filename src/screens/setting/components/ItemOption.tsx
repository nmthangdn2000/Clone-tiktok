import React from 'react';
import { ColorValue, ImageSourcePropType } from 'react-native';
import { Container, CText, Icon } from '../../../components';
import { ARROW_FORWARD_IOS_ICON } from '../../../configs/source';
import { COLOR, SPACING } from '../../../configs/styles';

interface Props {
  txtLeft?: string | undefined;
  txtRight?: string | undefined;
  iconRight?: ImageSourcePropType;
  colorTxtLeft?: ColorValue | undefined;
  colorTxtRight?: ColorValue | undefined;
}

const ItemOption = ({
  iconRight,
  txtLeft,
  txtRight,
  colorTxtLeft = COLOR.BLACK,
  colorTxtRight = COLOR.GRAY,
}: Props) => {
  return (
    <Container
      paddingVertical={SPACING.S2}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <CText color={colorTxtLeft}>{txtLeft}</CText>
      <Container flexDirection="row">
        <CText marginRight={SPACING.S2} color={colorTxtRight}>
          {txtRight}
        </CText>
        <Icon
          source={iconRight || ARROW_FORWARD_IOS_ICON}
          tintColor={COLOR.GRAY}
        />
      </Container>
    </Container>
  );
};

export default ItemOption;
