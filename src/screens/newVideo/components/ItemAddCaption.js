import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Container, CText } from '../../../components';
import { BORDER, COLOR, SPACING, TEXT } from '../../../configs/styles';

const ItemAddCaption = ({ name, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Container
        borderRadius={BORDER.SMALL}
        borderWidth={1}
        borderColor={COLOR.LIGHT_GRAY}
        paddingHorizontal={SPACING.S1}
        marginRight={SPACING.S2}
        justifyContent="center"
        alignItems="center">
        <CText
          textTransform="capitalize"
          text={TEXT.STRONG}
          color={COLOR.BLACK}
          textAlign="center"
          padding={SPACING.S1}
          fontSize={13}>
          {name}
        </CText>
      </Container>
    </Pressable>
  );
};

export default ItemAddCaption;

const styles = StyleSheet.create({});
