import React, {ReactNode} from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {useTheme} from '../ThemeContext';
import {MarginPaddingProps} from './types';
import {createMarginPaddingObj} from './utils';

export interface IImage extends ImageProps, MarginPaddingProps {
  children?: ReactNode;
  flex?: ViewStyle['flex'];
  color?: ViewStyle['backgroundColor'];
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  row?: boolean;
  position?: ViewStyle['position'];
  style?: StyleProp<ImageStyle>;
}

const Picture = ({
  flex,
  color,
  align,
  justify,
  row,
  position,
  style,
  ...props
}: IImage) => {
  const {spacing} = useTheme();
  const blockStyle = StyleSheet.flatten([
    flex !== undefined && {flex},
    color !== undefined && {backgroundColor: color},
    align !== undefined && {alignItems: align},
    justify !== undefined && {justifyContent: justify},
    row !== undefined && {flexDirection: 'row'},
    position !== undefined && {position},
    createMarginPaddingObj(props, spacing),
    style,
  ]) as ImageStyle;
  return <Image style={blockStyle} {...props} />;
};

export default Picture;
