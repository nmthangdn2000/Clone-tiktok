import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { BORDER, COLOR, SPACING, TEXT } from '../configs/styles';
import CText from '../components/CText';

const CButton = ({
  children,
  activeOpacity = 0.8,
  onPress,
  style,
  lable,
  colorLabel = COLOR.WHITE,
  sizeLabel,
  width,
  height,
  borderRadius = BORDER.SMALL,
  backgroundColor = COLOR.DANGER2,
}) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius,
      padding: SPACING.S2,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      width,
      height,
      ...style,
    },
  });

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={activeOpacity}
      onPress={onPress}>
      {lable ? (
        <CText text={TEXT.REGULAR} color={colorLabel} fontSize={sizeLabel}>
          {lable}
        </CText>
      ) : (
        { children }
      )}
    </TouchableOpacity>
  );
};

export default CButton;
