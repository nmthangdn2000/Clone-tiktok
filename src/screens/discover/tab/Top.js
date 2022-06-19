import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLOR, SPACING } from '../../../configs/styles';
import Title from '../components/Title';
import GridView from '../../../components/GridView';
import ItemSearchVideo from '../../../components/item/ItemSearchVideo';
import { AVATA_IMG } from '../../../configs/source';
import ItemUser from '../../../components/item/ItemUser';

const { width } = Dimensions.get('window');

const Top = () => {
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

  const ListHeaderComponent = () => {
    const dataUser = {
      item: {
        avatar: '',
        name: 'Thang321',
        userName: 'Thang321',
        follow: '14.9k',
        numVideo: 60,
      },
    };
    return (
      <View style={styles.containerUser}>
        <Title lable={'Người dùng'} />
        <ItemUser item={dataUser} />
        <ItemUser item={dataUser} />
        <ItemUser item={dataUser} />
        <View style={styles.hr} />
        <Title lable={'Video'} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <GridView
        data={data}
        renderItem={item => <ItemSearchVideo item={item} />}
        NUM_COLUMS={2}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingTop: SPACING.S2,
  },
  containerUser: {
    paddingHorizontal: SPACING.S4,
  },
  hr: {
    height: 6,
    width: width,
    backgroundColor: COLOR.LIGHT_GRAY,
    marginLeft: -SPACING.S4,
    marginVertical: SPACING.S2,
  },
});
