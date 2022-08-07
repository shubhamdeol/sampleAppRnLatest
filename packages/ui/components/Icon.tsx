import React from 'react';
import {StyleSheet, TextStyle} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {defaultTheme, useTheme} from '../ThemeContext';
import {MarginPaddingProps} from './types';
import {createMarginPaddingObj} from './utils';
import {materialCommunityIconNamesObj} from '../static';

interface IIcon extends Omit<IconProps, 'color'>, MarginPaddingProps {
  flex?: number;
  align?: TextStyle['textAlign'];
  color?: typeof defaultTheme['colors'];
  name: keyof typeof materialCommunityIconNamesObj;
}
const Icon = ({flex, align, color, name, ...props}: IIcon) => {
  const {spacing} = useTheme();

  const iconStyle = StyleSheet.flatten([
    flex !== undefined && {flex},
    align !== undefined && {textAlign: align},
    createMarginPaddingObj(props, spacing),
  ]) as TextStyle;

  return (
    <MaterialCommunityIcons
      style={iconStyle}
      color={color as any}
      name={name}
      {...props}
    />
  );
};

export default Icon;
