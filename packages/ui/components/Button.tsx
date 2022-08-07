import React, {ReactNode} from 'react';
import {
  StyleSheet,
  Pressable,
  PressableProps,
  ViewStyle,
  StyleProp,
} from 'react-native';
import Text from './Text';
import {useTheme} from '..';
import {MarginPaddingProps} from './types';
import {createMarginPaddingObj} from './utils';

interface IButton extends PressableProps, MarginPaddingProps {
  mode?: 'text' | 'outlined' | 'contained';
  uppercase?: boolean;
  children?: ReactNode;
  color?: ViewStyle['backgroundColor'];
  radius?: ViewStyle['borderRadius'];
  style?: StyleProp<ViewStyle>;
}

const Button = ({
  children,
  color,
  radius,
  uppercase,
  mode = 'contained',
  style,
  ...props
}: IButton) => {
  const {colors, spacing} = useTheme();
  const buttonStyle = StyleSheet.flatten([
    color !== undefined && {backgroundColor: color},
    radius !== undefined && {borderRadius: radius},
    createMarginPaddingObj(props, spacing),
    style,
  ]);

  const stylesBasedOnMode = React.useMemo(() => {
    switch (mode) {
      case 'contained':
        return {
          backgroundColor: colors.surfacePrimary,
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 4,
        };
      case 'outlined':
        return {
          borderWidth: 1,
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 4,
          borderColor: colors.borderOutline,
        };
      case 'text':
        return {
          paddingVertical: 12,
          paddingHorizontal: 16,
        };

      default:
        break;
    }
  }, [colors, mode]);

  const textStylesBasedOnMode = React.useMemo(() => {
    switch (mode) {
      case 'contained':
        return {
          color: colors.textOnSurface,
        };
      case 'outlined':
      case 'text':
        return {
          color: colors.textPrimary,
        };

      default:
        break;
    }
  }, [colors, mode]);

  return (
    <Pressable style={[stylesBasedOnMode, buttonStyle]} {...props}>
      <Text
        bt1
        align="center"
        color={textStylesBasedOnMode?.color || color}
        textTransform={uppercase ? 'uppercase' : 'none'}
        numberOfLines={1}>
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;
