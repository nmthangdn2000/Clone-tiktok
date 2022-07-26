import React from 'react';
import Section from './Section';
import TitleSecction from './TitleSecction';
import ItemOption from './ItemOption';

const Social = () => {
  return (
    <Section>
      <TitleSecction title={'Tài khoảng mạng xã hội'} />
      <ItemOption
        txtLeft="Instagram"
        txtRight="Thêm Instagram vào hồ sơ của bạn"
      />
      <ItemOption txtLeft="Youtube" txtRight="Thêm Youtube vào hồ sơ của bạn" />
      <ItemOption
        txtLeft="Facebook"
        txtRight="Thêm Facebook vào hồ sơ của bạn"
      />
      <ItemOption txtLeft="Twitter" txtRight="Thêm Twitter vào hồ sơ của bạn" />
    </Section>
  );
};

export default Social;
