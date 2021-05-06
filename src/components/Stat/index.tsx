/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {View, Animated, Text} from 'react-native';

interface StatType {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface ProgressProps {
  step: number;
  steps: number;
  height: number;
  stat: StatType;
}

const Stat: React.FC<ProgressProps> = ({step, steps, height, stat}) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [width, step]);

  return (
    <View
      style={{
        margin: 10,
      }}>
      <Text
        style={{
          fontSize: 16,
          color: '#fff',
        }}>
        {stat.stat.name.toUpperCase()}
      </Text>
      <View
        onLayout={e => {
          setWidth(e.nativeEvent.layout.width);
        }}
        style={{
          height,
          backgroundColor: '#C4C4C4',
          borderRadius: height,
          overflow: 'hidden',
          width: '100%',
        }}>
        <Animated.View
          style={{
            height,
            width: '100%',
            borderRadius: height,
            backgroundColor: '#fff',
            position: 'absolute',
            justifyContent: 'center',
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
        />
      </View>
    </View>
  );
};

export default Stat;
