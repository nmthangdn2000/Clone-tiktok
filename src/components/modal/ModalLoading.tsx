import { Modal, StyleSheet } from 'react-native';
import React from 'react';
import Icon from '../Icon';
import { TIKTOK_LOADER_GIF } from '../../configs/source';
import Container from '../Container';
import { HEIGHT, WIDTH } from '../../configs/constant';
import { COLOR } from '../../configs/styles';

interface Props {
  visible: boolean;
}

const ModalLoading = ({ visible }: Props) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <Container
        height={HEIGHT}
        width={WIDTH}
        justifyContent="center"
        alignItems="center"
        backgroundColor={COLOR.setOpacity(COLOR.BLACK, 0.7)}>
        <Icon source={TIKTOK_LOADER_GIF} width={50} height={50} />
      </Container>
    </Modal>
  );
};

export default ModalLoading;

const styles = StyleSheet.create({});
