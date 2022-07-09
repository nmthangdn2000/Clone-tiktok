import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { BORDER, COLOR, SPACING, TEXT } from '../../../configs/styles';
import { Icon, CText } from '../../../components';
import { Switch } from 'react-native-gesture-handler';

const ItemChoose = ({ iconLeft, name, iconRight, tintColor }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Icon source={iconLeft} width={26} height={26} tintColor={COLOR.GRAY} />
      <View style={styles.content}>
        <CText
          text={TEXT.REGULAR}
          fontSize={16}
          color={COLOR.BLACK}
          numberOfLines={1}>
          {name}
        </CText>
        {iconRight ? (
          <Icon source={iconRight} tintColor={COLOR.GRAY} />
        ) : (
          <Switch
            onChange={toggleSwitch}
            value={isEnabled}
            trackColor={{ false: '#767577', true: COLOR.LIGHT_GREEN }}
            thumbColor={isEnabled ? COLOR.GREEN : '#f4f3f4'}
          />
        )}
      </View>
    </View>
  );
};

export default ItemChoose;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.S4,
    alignItems: 'center',
  },
  iconHashTag: {
    width: 30,
    height: 30,
    borderRadius: BORDER.PILL,
    borderWidth: 2,
    borderColor: COLOR.LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginLeft: SPACING.S2,
    flexGrow: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
