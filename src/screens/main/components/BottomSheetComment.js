import React, { useCallback, useEffect, useRef } from 'react';
import BottomSheet from '../../../components/bottomSheets/BottomSheet';
import HeaderBottomSheetComment from './HeaderBottomSheetComment';
import FooterBottomSheetComment from './FooterBottomSheetComment';
import { Container } from '../../../components';
import { HEIGHT } from '../../../configs/constant';
import { SPACING } from '../../../configs/styles';
import { FlatList } from 'react-native-gesture-handler';
import ItemComment from '../../../components/item/ItemComment';
import { useSelector } from 'react-redux';

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

const BottomSheetComment = () => {
  const bottomSheetRef = useRef();

  const isShowComment = useSelector(state => state.mainScreen.isShowComment);

  useEffect(() => {
    const heightLayout = bottomSheetRef?.current?.heightLayoutCurrent();
    bottomSheetRef?.current?.scrollTo(-heightLayout);
  }, [isShowComment]);

  const handleClickClose = useCallback(() => {
    bottomSheetRef?.current?.scrollTo(0);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      HeaderComponent={
        <HeaderBottomSheetComment handleClickClose={handleClickClose} />
      }
      FooterComponent={<FooterBottomSheetComment />}>
      <Container padding={SPACING.S3} height={HEIGHT / 2} marginBottom={68}>
        <FlatList
          scrollEventThrottle={16}
          data={data}
          renderItem={({ item, index }) => {
            return <ItemComment item={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollToOverflowEnabled={true}
        />
      </Container>
    </BottomSheet>
  );
};

export default BottomSheetComment;
