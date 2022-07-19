import { findNodeHandle, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Indicator from './Indicator';
import Tab from './Tab';
import Container from '../Container';

interface MeasureLayout {
  x: number | undefined;
  y: number | undefined;
  width: number | undefined;
  height: number | undefined;
}

const Tabs = ({ data, translateX, focusTab }) => {
  const [measures, setMeasures] = useState<Array<MeasureLayout>>([]);
  const containerRef = useRef<View>(null);

  useEffect(() => {
    setTimeout(() => {
      let m = [];
      data.forEach(item => {
        item.ref.current.measureLayout(
          findNodeHandle(containerRef.current),
          (x, y, width, height) => {
            m.push({ x, y, width, height });
            console.log(x, y, width, height);
            if (m.length === data.length) {
              setMeasures(m);
            }
          },
        );
      });
    }, 500);
  }, []);

  return (
    <Container>
      <View ref={containerRef} style={styles.tab}>
        {data.map((item, index) => {
          return (
            <Tab
              // focusTab={focusTab === index}
              key={`${index}tab`}
              item={item}
              redDot={index === 0}
              ref={item.ref}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator meausres={measures} translateX={translateX} width={40} />
      )}
    </Container>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tab: {
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
  },
});
