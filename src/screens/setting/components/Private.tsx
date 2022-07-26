import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Section from './Section';
import ItemChoose from '../../newVideo/components/ItemChoose';
import {
  FIBER_SMART_RECORD_ICON,
  HEART_OUTLINE_IMG,
  MESSAGE_OUTLINE_ICON,
  STITCH_ICON,
} from '../../../configs/source';
import TitleSecction from './TitleSecction';
const Private = () => {
  return (
    <Section>
      <TitleSecction title={'Quyền riêng tư'} />
      <ItemChoose iconLeft={HEART_OUTLINE_IMG} name={'Xem lượt thích'} />
      <ItemChoose iconLeft={STITCH_ICON} name={'Cho phép Stitch'} />
      <ItemChoose iconLeft={MESSAGE_OUTLINE_ICON} name={'Cho phép bình luận'} />
      <ItemChoose iconLeft={FIBER_SMART_RECORD_ICON} name={'Cho phép Duet'} />
    </Section>
  );
};

export default React.memo(Private);
