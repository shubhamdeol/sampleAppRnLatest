import React from 'react';
import {Platform} from 'react-native';

import Colors from './Colors';
import {spacing} from './components/constants';

export type Font = {
  fontFamily: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
};

const configureFonts = (config = {}) => {
  const fontConfig = {
    ios: {
      bold: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
      },
      medium: {
        fontFamily: 'Montserrat-Medium',
        fontWeight: '500',
      },
      regular: {
        fontFamily: 'Montserrat-Regular',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Montserrat-Light',
        fontWeight: 'normal',
      },
    },
    android: {
      bold: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Montserrat-Medium',
        fontWeight: 'normal',
      },
      regular: {
        fontFamily: 'Montserrat-Regular',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Montserrat-Light',
        fontWeight: 'normal',
      },
    },
    default: {
      bold: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Montserrat-Medium',
        fontWeight: 'normal',
      },
      regular: {
        fontFamily: 'Montserrat-Regular',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Montserrat-Light',
        fontWeight: 'normal',
      },
    },
  };
  const fonts = Platform.select({...fontConfig, ...config}) as Fonts;
  return fonts;
};

export const defaultTheme = {
  dark: false,
  colors: {
    background1: Colors.grey10,
    background2: Colors.grey0,
    borderAlt1: Colors.navyBlue50,
    borderAlt1Low: Colors.navyBlue30,
    borderAlt2: Colors.purple50,
    borderAlt2Low: Colors.purple30,
    borderDivider: Colors.grey20,
    borderError: Colors.red50,
    borderErrorLow: Colors.red30,
    borderOutline: Colors.grey30,
    borderPrimary: Colors.blue50,
    borderPrimaryLow: Colors.blue30,
    borderSuccess: Colors.green50,
    borderSuccessLow: Colors.green30,
    borderWarning: Colors.brown50,
    borderWarningLow: Colors.brown30,
    iconAlt1: Colors.navyBlue50,
    iconAlt2: Colors.purple50,
    iconCashIn: Colors.green70,
    iconCashOut: Colors.red50,
    iconError: Colors.red50,
    iconHigh: Colors.grey90,
    iconLow: Colors.grey50,
    iconLowest: Colors.grey40,
    iconMedium: Colors.grey60,
    iconOnSurface: Colors.grey0,
    iconPrimary: Colors.blue50,
    iconSuccess: Colors.green50,
    iconWarning: Colors.brown50,
    surfaceAlt1: Colors.navyBlue50,
    surfaceAlt1Lowest: Colors.navyBlue10,
    surfaceAlt2: Colors.purple50,
    surfaceAlt2Lowest: Colors.purple10,
    surfaceCashIn: Colors.green70,
    surfaceCashOut: Colors.red50,
    surfaceDanger: Colors.red50,
    surfaceDefault: Colors.grey0,
    surfaceDefaultAlt: Colors.grey0,
    surfaceDisabled: Colors.grey30,
    surfaceErrorLowest: Colors.red10,
    surfaceInverse: Colors.grey90,
    surfaceNeutralLowest: Colors.grey10,
    surfacePrimary: Colors.blue50,
    surfacePrimaryLowest: Colors.blue10,
    surfaceSuccess: Colors.green50,
    surfaceSuccessLowest: Colors.green10,
    surfaceWarningLowest: Colors.brown10,
    textAlt1: Colors.navyBlue60,
    textAlt2: Colors.purple60,
    textCashIn: Colors.green70,
    textCashOut: Colors.red50,
    textError: Colors.red50,
    textHigh: Colors.grey90,
    textLow: Colors.grey50,
    textLowest: Colors.blue40,
    textPrimary: Colors.blue50,
    textMedium: Colors.grey60,
    textOnSurface: Colors.grey0,
    textSuccess: Colors.green50,
    textWarning: Colors.brown60,
  },
  fonts: configureFonts(),
  spacing: spacing,
};

export const darkTheme = {
  dark: true,
  colors: {
    background1: Colors['darkWhite-5'],
    background2: Colors.darkWhite0,
    borderAlt1: Colors.darkNavyBlue50,
    borderAlt1Low: Colors.darkNavyBlue30,
    borderAlt2: Colors.darkPurple50,
    borderAlt2Low: Colors.darkPurple30,
    borderDivider: Colors.darkWhite10,
    borderError: Colors.darkRed50,
    borderErrorLow: Colors.darkRed30,
    borderOutline: Colors.darkWhite20,
    borderPrimary: Colors.darkBlue50,
    borderPrimaryLow: Colors.darkBlue30,
    borderSuccess: Colors.darkGreen50,
    borderSuccessLow: Colors.darkGreen30,
    borderWarning: Colors.darkBrown50,
    borderWarningLow: Colors.darkBrown30,
    iconAlt1: Colors.darkNavyBlue50,
    iconAlt2: Colors.darkPurple50,
    iconCashIn: Colors.darkGreen50,
    iconCashOut: Colors.darkRed50,
    iconError: Colors.darkRed50,
    iconHigh: Colors.darkWhite90,
    iconLow: Colors.darkWhite30,
    iconLowest: Colors.darkWhite20,
    iconMedium: Colors.darkWhite50,
    iconOnSurface: Colors.darkWhite0,
    iconPrimary: Colors.darkBlue50,
    iconSuccess: Colors.darkGreen50,
    iconWarning: Colors.darkBrown50,
    surfaceAlt1: Colors.darkNavyBlue50,
    surfaceAlt1Lowest: Colors.darkNavyBlue20,
    surfaceAlt2: Colors.darkPurple50,
    surfaceAlt2Lowest: Colors.darkPurple20,
    surfaceCashIn: Colors.darkGreen50,
    surfaceCashOut: Colors.darkRed50,
    surfaceDanger: Colors.darkRed50,
    surfaceDefault: Colors.darkWhite0,
    surfaceDefaultAlt: Colors.darkWhite5,
    surfaceDisabled: Colors.darkWhite20,
    surfaceErrorLowest: Colors.darkRed20,
    surfaceInverse: Colors.darkWhite90,
    surfaceNeutralLowest: Colors.darkWhite5,
    surfacePrimary: Colors.darkBlue50,
    surfacePrimaryLowest: Colors.darkBlue20,
    surfaceSuccess: Colors.darkGreen50,
    surfaceSuccessLowest: Colors.darkGreen20,
    surfaceWarningLowest: Colors.darkBrown20,
    textAlt1: Colors.darkNavyBlue50,
    textAlt2: Colors.darkPurple50,
    textCashIn: Colors.darkGreen50,
    textCashOut: Colors.darkRed50,
    textError: Colors.darkRed50,
    textHigh: Colors.darkWhite90,
    textLow: Colors.darkWhite30,
    textLowest: Colors.darkWhite20,
    textPrimary: Colors.darkBlue50,
    textMedium: Colors.darkWhite50,
    textOnSurface: Colors.darkWhite0,
    textSuccess: Colors.darkGreen50,
    textWarning: Colors.darkBrown50,
  },
  fonts: configureFonts(),
};

const ThemeContext = React.createContext(defaultTheme);

export const AppUIProvider = ({children, theme}) => {
  const appTheme = theme.dark
    ? {
        ...darkTheme,
        ...theme,
      }
    : {
        ...defaultTheme,
        ...theme,
      };

  return (
    <ThemeContext.Provider value={appTheme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  return theme;
};
