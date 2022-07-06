import React from 'react';
import Container from './Container';
import Icon from './Icon';
import { TIKTOK_LOADER_GIF } from '../configs/source';

const Loading = () => {
  return (
    <Container
      width={'100%'}
      height={'100%'}
      justifyContent="center"
      alignItems="center">
      <Icon source={TIKTOK_LOADER_GIF} width={50} height={50} />
    </Container>
  );
};

export default Loading;
