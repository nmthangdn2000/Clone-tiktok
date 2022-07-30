import React from 'react';
import Section from './Section';
import TitleSecction from './TitleSecction';
import ItemOption from './ItemOption';
import { COPPY_CONTENT_ICON } from '../../../configs/source';

const Introduce = ({ data }) => {
  console.log(data);

  return (
    <Section>
      <TitleSecction title={'Giới thiệu về bạn'} />
      <ItemOption txtLeft="Tên" txtRight={data?.name} />
      <ItemOption txtLeft="Tiktok ID" txtRight={data?.userName} />
      <ItemOption
        txtLeft=""
        txtRight={`tiktok.com/@${data?.userName}`}
        iconRight={COPPY_CONTENT_ICON}
      />
      <ItemOption txtLeft="Tiểu sử" txtRight="Thêm tiểu sử vào hồ sở của bạn" />
    </Section>
  );
};

export default Introduce;
