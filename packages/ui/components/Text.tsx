import React, {ReactNode} from 'react';
import {StyleSheet, Text as RNText, TextProps, TextStyle} from 'react-native';
import {useTheme} from '..';
import {MarginPaddingProps} from './types';
import {createMarginPaddingObj} from './utils';

interface IText extends TextProps, MarginPaddingProps {
  children?: ReactNode;
  flex?: number;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  s1?: boolean;
  s2?: boolean;
  s3?: boolean;
  s4?: boolean;
  c1?: boolean;
  c2?: boolean;
  bt1?: boolean;
  size?: TextStyle['fontSize'];
  color?: TextStyle['color'];
  align?: TextStyle['textAlign'];
  textTransform?: TextStyle['textTransform'];
}

const Text = ({
  children,
  flex,
  color,
  size,
  h1,
  h2,
  h3,
  h4,
  s1,
  s2,
  s3,
  s4,
  c1,
  c2,
  bt1,
  align,
  textTransform,
  ...props
}: IText) => {
  const {fonts, colors, spacing} = useTheme();

  const textStyle = StyleSheet.flatten([
    {fontSize: 16},
    bt1 !== undefined && {fontSize: 16, ...fonts.medium},
    h1 !== undefined && {fontSize: 32, ...fonts.medium},
    h2 !== undefined && {fontSize: 24, ...fonts.medium},
    h3 !== undefined && {fontSize: 22, ...fonts.medium},
    h4 !== undefined && {fontSize: 18, ...fonts.medium},
    s1 !== undefined && {fontSize: 16, ...fonts.medium},
    s2 !== undefined && {fontSize: 16, ...fonts.regular},
    s3 !== undefined && {fontSize: 14, ...fonts.medium},
    s4 !== undefined && {fontSize: 14, ...fonts.regular},
    c1 !== undefined && {fontSize: 12, ...fonts.medium},
    c2 !== undefined && {fontSize: 12, ...fonts.regular},
    flex !== undefined && {flex},
    align !== undefined && {textAlign: align},
    color !== undefined && {color: color || colors.textHigh},
    size !== undefined && {fontSize: size},
    textTransform !== undefined && {textTransform},
    createMarginPaddingObj(props, spacing),
  ]) as TextStyle;
  return (
    <RNText style={[textStyle]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
