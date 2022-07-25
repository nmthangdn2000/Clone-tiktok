import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import BottomSheet from './BottomSheet';
import CText from '../CText';
import Icon from '../Icon';
import { SETTING_ICON, USER_IMG } from '../../configs/source';
import Container from '../Container';
import { COLOR, SPACING } from '../../configs/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setBottomSheetSettingProfile } from '../../store/indexSlice';

const BottomSettingProfile = () => {
  const dispatch = useDispatch();
  const bottomSheetSettingProfile = useSelector(
    state => state.index.bottomSheetSettingProfile,
  );
  const bottomSheetRef = useRef();

  useEffect(() => {
    if (bottomSheetSettingProfile) {
      const heightLayout = bottomSheetRef?.current?.heightLayoutCurrent();
      bottomSheetRef?.current?.scrollTo(-heightLayout);
    }
  }, [bottomSheetSettingProfile]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onCloseBottomSheet={() => dispatch(setBottomSheetSettingProfile(false))}>
      <Container
        backgroundColor={COLOR.WHITE}
        zIndex={100}
        padding={SPACING.S4}
        paddingBottom={SPACING.S8}>
        <Container borderBottomWidth={0.2} borderBottomColor={COLOR.LIGHT_GRAY}>
          <TouchableOpacity onPress={null}>
            <Container
              paddingVertical={SPACING.S3}
              flexDirection="row"
              alignItems="center">
              <Icon
                source={USER_IMG}
                tintColor={COLOR.BLACK}
                width={26}
                height={26}
              />
              <CText marginLeft={SPACING.S2}>Công cụ dành cho tác giả</CText>
            </Container>
          </TouchableOpacity>
        </Container>

        <Container borderBottomWidth={0.2} borderBottomColor={COLOR.LIGHT_GRAY}>
          <TouchableOpacity onPress={null}>
            <Container
              paddingVertical={SPACING.S3}
              flexDirection="row"
              alignItems="center">
              <Icon source={SETTING_ICON} />
              <CText marginLeft={SPACING.S2}>Chỉnh sửa hồ sơ và cài đặt</CText>
            </Container>
          </TouchableOpacity>
        </Container>
      </Container>
    </BottomSheet>
  );
};

export default React.memo(BottomSettingProfile);

const styles = StyleSheet.create({});
