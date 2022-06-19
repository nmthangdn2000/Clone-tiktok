import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR, SPACING } from '../../../configs/styles';
import GridView from '../../../components/GridView';
import ItemSearchVideo from '../../../components/item/ItemSearchVideo';
import { AVATA_IMG } from '../../../configs/source';

const Video = () => {
  const data = [
    {
      caption: 'Là ai đã từ bỏ?',
      background: AVATA_IMG,
      author: { avatar: AVATA_IMG, name: 'Thang321' },
      like: 120,
    },
    {
      caption: 'Là ai đã từ bỏ?',
      background: AVATA_IMG,
      author: { avatar: AVATA_IMG, name: 'Thang321 qwe qwe qwe ' },
      like: 120,
    },
    {
      caption: 'Là ai đã từ bỏ?',
      background: AVATA_IMG,
      author: { avatar: AVATA_IMG, name: 'Thang321' },
      like: 120,
    },
    {
      caption: 'Là ai đã từ bỏ?',
      background: AVATA_IMG,
      author: { avatar: AVATA_IMG, name: 'Thang321' },
      like: 120,
    },
    {
      caption: 'Là ai đã từ bỏ?',
      background: AVATA_IMG,
      author: { avatar: AVATA_IMG, name: 'Thang321' },
      like: 120,
    },
    {
      caption: 'Là ai đã từ bỏ?',
      background: AVATA_IMG,
      author: { avatar: AVATA_IMG, name: 'Thang321' },
      like: 120,
    },
    {
      caption: 'Là ai đã từ bỏ?',
      background: AVATA_IMG,
      author: { avatar: AVATA_IMG, name: 'Thang321' },
      like: 120,
    },
    {
      caption: 'Là ai đã từ bỏ?',
      background: AVATA_IMG,
      author: { avatar: AVATA_IMG, name: 'Thang321' },
      like: 120,
    },
  ];
  return (
    <View style={styles.container}>
      <GridView
        data={data}
        renderItem={item => <ItemSearchVideo item={item} />}
        NUM_COLUMS={2}
      />
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingTop: SPACING.S2,
  },
});
