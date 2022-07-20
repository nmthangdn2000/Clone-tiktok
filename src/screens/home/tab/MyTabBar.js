import { Container, Icon } from '../../../components';
import React, { useEffect, useRef, useState } from 'react';
import Tab from './Tab';
import { COLOR, SPACING } from '../../../configs/styles';
import { STATUSBAR_HEIGHT } from '../../../constants/constants';
import Indicator from '../../../components/Tabs/Indicator';
import { LIVE_ICON, SEARCH_IMG } from '../../../configs/source';

const MyTabBar = ({ state, descriptors, navigation, position }) => {
  const routes = state.routes.map(r => {
    return { ...r, ref: React.createRef() };
  });
  const containerRef = useRef(null);
  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      let m = [];
      routes.forEach(item => {
        item.ref?.current?.measureLayout(
          containerRef.current,
          (x, y, width, height) => {
            m.push({ x, y, width, height });
            if (m.length === routes.length) {
              setMeasures(m);
            }
          },
        );
      });
    }, 1000);
  }, []);

  return (
    <Container
      backgroundColor={COLOR.TRANSPARENT}
      position="absolute"
      zIndex={1}
      top={0}
      left={0}
      right={0}
      marginTop={STATUSBAR_HEIGHT}>
      <Container
        ref={containerRef}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingHorizontal={SPACING.S4}>
        <Icon
          source={LIVE_ICON}
          width={26}
          height={26}
          tintColor={COLOR.WHITE}
        />
        <Container flexDirection="row" alignItems="center">
          {routes.map((route, index) => {
            return (
              <Tab
                key={index}
                descriptors={descriptors}
                index={index}
                navigation={navigation}
                position={position}
                route={route}
                state={state}
                ref={route.ref}
              />
            );
          })}
        </Container>
        <Icon
          source={SEARCH_IMG}
          width={26}
          height={26}
          tintColor={COLOR.WHITE}
        />
      </Container>
      {measures.length > 1 && (
        <Indicator measures={measures} position={position} width={40} />
      )}
    </Container>
  );
};

export default MyTabBar;
