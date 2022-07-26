import React from 'react';
import Section from './Section';
import TitleSecction from './TitleSecction';
import ItemOption from './ItemOption';
import { COPPY_CONTENT_ICON } from '../../../configs/source';

const Introduce = () => {
  return (
    <Section>
      <TitleSecction title={'Giới thiệu về bạn'} />
      <ItemOption txtLeft="Tên" txtRight="Thắng đẹp trai" />
      <ItemOption txtLeft="Tiktok ID" txtRight="Thang123" />
      <ItemOption
        txtLeft=""
        txtRight="tiktok.com/@thang123"
        iconRight={COPPY_CONTENT_ICON}
      />
      <ItemOption txtLeft="Tiểu sử" txtRight="Thêm tiểu sử vào hồ sở của bạn" />
    </Section>
  );
};

export default Introduce;
