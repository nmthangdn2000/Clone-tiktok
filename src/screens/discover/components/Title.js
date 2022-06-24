import { StyleSheet } from 'react-native';
import React from 'react';
import CText from '../../../components/CText';
import { SPACING, TEXT } from '../../../configs/styles';

const Title = ({ lable }) => {
  return (
    <CText text={TEXT.STRONG} fontSize={16} style={styles.txt}>
      {lable}
    </CText>
  );
};

export default Title;

const styles = StyleSheet.create({
  txt: {
    marginVertical: SPACING.S1,
  },
});
