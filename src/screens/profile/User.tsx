import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SPACING, TEXT, COLOR, BORDER } from '../../configs/styles/index';
import { AVATA_IMG, BOOKMARK_IMG } from '../../configs/source';
import { UserModel } from '../../models/User.model';

export type Props = {
  user: UserModel;
};

const User: React.FC<Props> = ({ user }) => {
  const EditProfile = () => {
    return (
      <View style={[styles.buttonStyle, { height: 50 }]}>
        <Text style={styles.txtButon}>Chỉnh sửa thông tin</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={AVATA_IMG} style={styles.avata} />
      <Text style={styles.txtUserName}>@{user.name}</Text>
      <View style={styles.containerFollow}>
        <View style={styles.itemFollow}>
          <Text style={styles.txtAmountFollow}>{user.following}</Text>
          <Text style={styles.txtTitleFollow}>Đang Follow</Text>
        </View>
        <View style={styles.itemFollow}>
          <Text style={styles.txtAmountFollow}>{user.follower}</Text>
          <Text style={styles.txtTitleFollow}>Follow</Text>
        </View>
        <View style={styles.itemFollow}>
          <Text style={styles.txtAmountFollow}>{user.totalLike}</Text>
          <Text style={styles.txtTitleFollow}>Thích</Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <EditProfile />
        <View style={[styles.buttonStyle, { height: 50 }]}>
          <Image source={BOOKMARK_IMG} style={styles.iconButton} />
        </View>
      </View>
      <View style={styles.containerBio}>
        <Text>Thêm tiểu sử</Text>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.S4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avata: {
    width: 96,
    height: 96,
    borderRadius: 50,
  },
  txtUserName: {
    ...TEXT.STRONG,
    color: COLOR.BLACK,
    marginTop: SPACING.S3,
  },
  containerFollow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: SPACING.S4,
  },
  itemFollow: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 107,
    paddingHorizontal: 16,
  },
  txtAmountFollow: {
    ...TEXT.STRONG,
    color: COLOR.BLACK,
    fontSize: 17,
  },
  txtTitleFollow: {
    ...TEXT.SMALL,
    color: COLOR.GRAY,
    fontSize: 12,
  },
  containerButton: {
    marginTop: SPACING.S4,
    flexDirection: 'row',
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: BORDER.SMALL,
    borderColor: COLOR.LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.S1,
    paddingHorizontal: 11,
  },
  txtButon: {
    ...TEXT.STRONG,
    color: COLOR.BLACK,
    fontSize: 16,
  },
  iconButton: {
    width: 18,
    height: 22,
  },
  containerBio: {
    marginTop: SPACING.S4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBio: {
    ...TEXT.REGULAR,
    color: COLOR.GRAY,
  },
});
