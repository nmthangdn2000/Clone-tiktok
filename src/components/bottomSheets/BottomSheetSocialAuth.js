import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '../Icon';
import {
  APPLE_ICON,
  CLOSE_IMG,
  FACEBOOK_ICON,
  GOOGLE_ICON,
  INSTAGRAM_ICON,
  KAKAOTALK_ICON,
  USER_IMG,
} from '../../configs/source';
import Container from '../Container';
import CText from '../CText';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import BottomSheet from './BottomSheet';
import { HEIGHT } from '../../configs/constant';
import { setBottomSheetSignIn } from '../../store/indexSlice';
import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import Animated, {
  LightSpeedInRight,
  LightSpeedInLeft,
  LightSpeedOutRight,
  LightSpeedOutLeft,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';
import { Pressable } from 'react-native';

const BottomSheetSocialAuth = () => {
  const dispatch = useDispatch();
  const bottomSheetRef = useRef();

  const [currentForm, setCurrentForm] = useState(0); //0 social, 1 login, 2 register

  const [dataSocial, setDataSocial] = useState([]);

  const bottomSheetSignIn = useSelector(state => state.index.bottomSheetSignIn);

  useEffect(() => {
    if (bottomSheetSignIn) {
      const heightLayout = bottomSheetRef?.current?.heightLayoutCurrent();
      bottomSheetRef?.current?.scrollTo(-heightLayout);
      setTimeout(() => {
        setDataSocial(dataSignInWithSocial);
      }, 300);
    }
  }, [bottomSheetSignIn]);

  const handleClickClose = useCallback(() => {
    bottomSheetRef?.current?.scrollTo(0);
    setDataSocial([]);
  }, []);

  const closeBottomSheet = () => {
    dispatch(setBottomSheetSignIn(false));
    setDataSocial([]);
  };

  const handleClickText = () => {
    setCurrentForm(currentForm === 1 ? 2 : 1);
  };

  const backToScreenSocial = useCallback(() => {
    setDataSocial(dataSignInWithSocial);
  }, []);

  const dataSignInWithSocial = [
    {
      icon: USER_IMG,
      using: 'Sử dụng số điện thoại hoặc email',
      color: COLOR.BLACK,
      onPress: () => {
        setDataSocial([]);
        setCurrentForm(2); // naviga to register
      },
    },
    {
      icon: FACEBOOK_ICON,
      using: 'Tiếp tục với Facebook',
    },
    {
      icon: GOOGLE_ICON,
      using: 'Tiếp tục với Google',
    },
    //   {
    //     icon: TWITTER_ICON,
    //     using: 'Tiếp tục với Twitter',
    //   },
    //   {
    //     icon: LINE_ICON,
    //     using: 'Tiếp tục với Line',
    //   },
    {
      icon: KAKAOTALK_ICON,
      using: 'Tiếp tục với KakaoTalk',
    },
    {
      icon: APPLE_ICON,
      using: 'Tiếp tục với Apple',
    },
    {
      icon: INSTAGRAM_ICON,
      using: 'Tiếp tục với Instagram',
    },
  ];

  const ItemSignIn = ({ index, icon, using, color, onPress }) => {
    return (
      <Animated.View
        entering={
          index % 2
            ? LightSpeedInRight.duration(1000)
            : LightSpeedInLeft.duration(1000)
        }
        exiting={
          index % 2
            ? LightSpeedOutRight.duration(1000)
            : LightSpeedOutLeft.duration(1000)
        }>
        <Pressable onPress={onPress}>
          <Container
            flexDirection="row"
            borderRadius={BORDER.SMALL}
            borderWidth={1}
            borderColor={COLOR.LIGHT_GRAY}
            justifyContent="center"
            alignItems="center"
            padding={SPACING.S2}
            marginVertical={SPACING.S2}>
            <Icon source={icon} tintColor={color} />
            <Container flexGrow={1} justifyContent="center" alignItems="center">
              <CText text={TEXT.STRONG} fontSize={16}>
                {using}
              </CText>
            </Container>
          </Container>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <BottomSheet ref={bottomSheetRef} closeBottomSheet={closeBottomSheet}>
      <Container paddingTop={SPACING.S5} height={HEIGHT - 48}>
        <Container
          paddingHorizontal={SPACING.S4}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Icon source={CLOSE_IMG} onPress={handleClickClose} />
          <CText
            width={20}
            height={20}
            borderRadius={BORDER.PILL}
            color={COLOR.GRAY}
            borderWidth={1}
            borderColor={COLOR.GRAY}
            justifyContent="center"
            alignItems="center"
            textAlign="center">
            ?
          </CText>
        </Container>
        <Container
          flex={1}
          paddingHorizontal={SPACING.S5}
          marginTop={SPACING.S10}
          marginBottom={SPACING.S5}
          flexDirection="column"
          justifyContent="space-between">
          {currentForm === 0 ? (
            <Animated.View
              entering={FadeIn.duration(600)}
              exiting={FadeOut.duration(600)}>
              <Container height={'100%'}>
                <Container>
                  <CText
                    text={TEXT.H1}
                    textAlign="center"
                    marginVertical={SPACING.S2}>
                    Đăng ký TikTok
                  </CText>
                  <CText
                    text={TEXT.REGULAR}
                    color={COLOR.GRAY}
                    textAlign="center"
                    marginVertical={SPACING.S2}>
                    Tạo hồ sơ, theo dõi các tài khoản khác, quay video {'\n'}{' '}
                    của chính bạn, v.v.
                  </CText>
                </Container>
                <Container marginTop={SPACING.S5} flexGrow={1}>
                  {dataSocial.map((item, index) => {
                    console.log(dataSocial.length);
                    return (
                      <ItemSignIn
                        onPress={item.onPress}
                        index={index}
                        key={index.toString()}
                        icon={item.icon}
                        using={item.using}
                        color={item.color}
                      />
                    );
                  })}
                </Container>
                <Container marginBottom={80}>
                  <CText textAlign="center" color={COLOR.GRAY} fontSize={12}>
                    Bằng cách tiếp tục, bạn đồng ý với{' '}
                    <CText text={TEXT.STRONG} fontSize={12}>
                      Điều khoảng Dịch vụ
                    </CText>{' '}
                    của chúng tôi và thừa nhận rằng bạn đã đọc{' '}
                    <CText text={TEXT.STRONG} fontSize={12}>
                      Chính sách Quyền Riêng tư
                    </CText>{' '}
                    Để tìm hiểu cách chúng tôi thu thập, sử dụng và chia sẽ dữ
                    liệu của bạn
                  </CText>
                </Container>
              </Container>
            </Animated.View>
          ) : currentForm === 1 ? (
            <FormSignIn
              setCurrentForm={setCurrentForm}
              handleClickClose={handleClickClose}
            />
          ) : (
            <FormSignUp
              setCurrentForm={setCurrentForm}
              backToScreenSocial={backToScreenSocial}
            />
          )}
        </Container>
        <Container
          backgroundColor={COLOR.LIGHT_GRAY2}
          padding={SPACING.S5}
          position="absolute"
          bottom={0}
          left={0}
          right={0}>
          <CText textAlign="center" fontSize={16}>
            {currentForm === 1
              ? 'Bạn chưa có tài khoảng?'
              : 'Bạn đã có tài khoảng?'}{' '}
            <CText
              text={TEXT.STRONG}
              color={COLOR.DANGER2}
              fontSize={16}
              onPress={handleClickText}>
              {currentForm === 1 ? 'Đăng ký' : 'Đăng nhập'}
            </CText>
          </CText>
        </Container>
      </Container>
    </BottomSheet>
  );
};

export default BottomSheetSocialAuth;
