import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Section from './Section';
import ItemChoose from '../../newVideo/components/ItemChoose';
import {
  FIBER_SMART_RECORD_ICON,
  HEART_OUTLINE_IMG,
  MESSAGE_OUTLINE_ICON,
  STITCH_ICON,
} from '../../../configs/source';
import TitleSecction from './TitleSecction';
import * as userApi from '../../../apis/user.api';
import { UserModel } from '../../../models/User.model';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_STORAGE } from '../../../constants/constants';
interface Props {
  data: UserModel | undefined;
}

const Private = ({ data }: Props) => {
  const handleSwitchLike = useCallback(async (a: boolean): Promise<void> => {
    console.log(a);
    console.log(!a);

    try {
      const data: UserModel = {
        privacy: {
          like: !a,
        },
      };
      const token = await AsyncStorage.getItem(KEY_STORAGE.TOKEN);
      const res = await userApi.updateUser(data, token);
      console.log('res', res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log('!data?.privacy?.like!', !data?.privacy?.like);

  return (
    <Section>
      <TitleSecction title={'Quyền riêng tư'} />
      {data && (
        <ItemChoose
          initValue={!data?.privacy?.like}
          onChange={handleSwitchLike}
          iconLeft={HEART_OUTLINE_IMG}
          name={'Xem lượt thích'}
        />
      )}

      <ItemChoose iconLeft={STITCH_ICON} name={'Cho phép Stitch'} />
      <ItemChoose iconLeft={MESSAGE_OUTLINE_ICON} name={'Cho phép bình luận'} />
      <ItemChoose iconLeft={FIBER_SMART_RECORD_ICON} name={'Cho phép Duet'} />
    </Section>
  );
};

export default React.memo(Private);
