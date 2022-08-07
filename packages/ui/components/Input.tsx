import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {useTheme} from '..';
import Block from './Block';
import Text from './Text';
import {MarginPaddingProps} from './types';
import {createMarginPaddingObj} from './utils';

interface IInput extends TextInputProps, MarginPaddingProps {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  backgroundColor?: string;
}

const Input = ({
  children,
  label,
  placeholder,
  errorMessage,
  ...props
}: IInput) => {
  const {colors, fonts, spacing} = useTheme();
  const blockStyle = StyleSheet.flatten([
    createMarginPaddingObj(props, spacing),
  ]);

  const hasError = Boolean(errorMessage);
  return (
    <Block>
      <Text s3 color={colors.textMedium}>
        {label}
      </Text>
      <TextInput
        selectionColor={colors.iconPrimary}
        placeholder={placeholder || label}
        style={[
          styles.input,
          {
            borderColor: hasError ? colors.textError : colors.borderOutline,
            ...fonts.medium,
            color: colors.textHigh,
          },
          blockStyle,
        ]}
        {...props}>
        {children}
      </TextInput>
      <Text align="right" c1 color={colors.textError} pt={8} pb={8}>
        {errorMessage}
      </Text>
    </Block>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
});
