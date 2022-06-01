import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import { BORDER, COLOR, SPACING } from '../configs/styles';
import Icon from './Icon';

const CInput = ({
  value,
  placeholder,
  onChangeText,
  iconLeft,
  iconColor = COLOR.BLACK,
  sizeIcon = 24,
  keyboardType = 'default',
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {iconLeft && (
        <Icon
          source={iconLeft}
          color={iconColor}
          width={sizeIcon}
          height={sizeIcon}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CInput;

const styles = StyleSheet.create({
  container: {
    padding: SPACING.S1,
    backgroundColor: COLOR.LIGHT_GRAY,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: BORDER.SMALL,
    paddingHorizontal: SPACING.S2,
  },
  input: {
    marginLeft: SPACING.S1,
    flex: 1,
    padding: SPACING.S1,
  },
});
