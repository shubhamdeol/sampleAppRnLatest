import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import {useTheme} from '../ThemeContext';
import {MarginPaddingProps} from './types';
import {createMarginPaddingObj} from './utils';

export interface IBlock extends ViewProps, MarginPaddingProps {
  children?: ReactNode;
  flex?: ViewStyle['flex'];
  color?: ViewStyle['backgroundColor'];
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  row?: boolean;
  position?: ViewStyle['position'];
  radius?: number;
  style?: StyleProp<ViewStyle>;
}

const Block = ({
  children,
  flex,
  color,
  align,
  justify,
  row,
  position,
  radius,
  style,
  ...props
}: IBlock) => {
  const {spacing, colors} = useTheme();
  const blockStyle = StyleSheet.flatten([
    flex !== undefined && {flex},
    {backgroundColor: color || colors.background1},
    align !== undefined && {alignItems: align},
    justify !== undefined && {justifyContent: justify},
    row !== undefined && {flexDirection: 'row'},
    position !== undefined && {position},
    radius !== undefined && {
      borderRadius: radius,
    },
    createMarginPaddingObj(props, spacing),
    style,
  ]) as ViewStyle;
  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>
  );
};

export default Block;
