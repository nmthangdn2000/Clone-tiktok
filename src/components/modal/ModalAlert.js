import { Modal, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Icon from '../Icon';
import { TIKTOK_LOADER_GIF } from '../../configs/source';
import Container from '../Container';
import { HEIGHT, WIDTH } from '../../configs/constant';
import { COLOR } from '../../configs/styles';

const ModalAlert = ({ status, message, visible, setVisible }) => {
  const width = WIDTH * 0.8;
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <Pressable onPress={() => setVisible(false)}>
        <Container
          height={HEIGHT}
          width={WIDTH}
          justifyContent="center"
          alignItems="center"
          backgroundColor={COLOR.setOpacity(COLOR.BLACK, 0.7)}>
          <Container width={width} minHeight={width * 0.6}>
            <Icon />
          </Container>
        </Container>
      </Pressable>
    </Modal>
  );
};

export default ModalAlert;

const styles = StyleSheet.create({});
