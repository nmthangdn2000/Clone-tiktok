import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import GridView from '../../components/GridView';
import ItemVideo from '../../components/item/ItemVideo';
import ListHeaderComponent from './components/ListHeaderComponent';
import { BORDER, COLOR, SPACING, TEXT } from '../../configs/styles';
import Icon from '../../components/Icon';
import { ARROW_BACK_IMG, REPLY_IMG, VIDEOCAMR_IMG } from '../../configs/source';
import CText from '../../components/CText';
import { useNavigation } from '@react-navigation/native';

import Animated, {
  withTiming,
  withRepeat,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const NUM_COLUMS = 3;

const AudioScreen = () => {
  const navigation = useNavigation();

  const scaleValue = useSharedValue(1);

  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withRepeat(withTiming(scaleValue.value), -1, true),
        },
      ],
    };
  }, []);

  useEffect(() => {
    scaleValue.value = 1.04;

    navigation.setOptions({
      headerShown: true,
      headerTitle: () => null,
      headerShadowVisible: false,
      headerLeft: () => (
        <Icon
          source={ARROW_BACK_IMG}
          color={COLOR.BLACK}
          onPress={() => navigation.goBack()}
        />
      ),
      headerRight: () => (
        <Icon
          source={REPLY_IMG}
          color={COLOR.BLACK}
          onPress={() => console.log('ádkjalskd')}
        />
      ),
    });
  }, [navigation]);

  const data = [
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4' },
    { key: '5' },
    { key: '6' },
    { key: '7' },
    { key: '8' },
    { key: '9' },
    { key: '10' },
    { key: '11' },
    { key: '6' },
    { key: '7' },
    { key: '8' },
    { key: '9' },
    { key: '10' },
  ];

  return (
    <View style={styles.container}>
      <GridView
        data={data}
        renderItem={item => <ItemVideo item={item} NUM_COLUMS={NUM_COLUMS} />}
        NUM_COLUMS={NUM_COLUMS}
        ListHeaderComponent={ListHeaderComponent}
      />
      <View style={styles.containerButton}>
        <Animated.View style={[styles.button, scaleStyle]}>
          <View style={styles.iconButton}>
            <Icon source={VIDEOCAMR_IMG} width={'100%'} height={'100%'} />
          </View>
          <View style={[styles.txtButton]}>
            <CText color={COLOR.WHITE} text={TEXT.STRONG} fontSize={18}>
              Dùng âm thanh này
            </CText>
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

export default AudioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  containerButton: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: SPACING.S5,
  },
  button: {
    borderRadius: BORDER.PILL,
    backgroundColor: COLOR.DANGER2,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: SPACING.S4,
    paddingVertical: SPACING.S2,
  },
  iconButton: {
    width: 32,
    height: 32,
  },
  txtButton: {
    marginLeft: SPACING.S2,
  },
  //
  bottomTabIcon: {
    width: 28,
    height: 28,
  },
  newVideoTabIcon: {
    width: 48,
    height: 30,
    resizeMode: 'contain',
  },
});
