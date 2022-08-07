import {StyleSheet} from 'react-native';
import {MarginPaddingProps, Spacing} from './types';

export const createMarginPaddingObj = (
  {p, ph, pb, pt, pv, m, mh, mb, mt, mv, ml, mr, pl, pr}: MarginPaddingProps,
  spacing: Spacing,
) => {
  return StyleSheet.flatten([
    p !== undefined && {padding: spacing[p]},
    ph !== undefined && {paddingHorizontal: spacing[ph]},
    pb !== undefined && {paddingBottom: spacing[pb]},
    pt !== undefined && {paddingTop: spacing[pt]},
    pv !== undefined && {paddingVertical: spacing[pv]},
    pl !== undefined && {marginLeft: spacing[pl]},
    pr !== undefined && {marginLeft: spacing[pr]},
    m !== undefined && {margin: spacing[m]},
    mh !== undefined && {marginHorizontal: spacing[mh]},
    mb !== undefined && {marginBottom: spacing[mb]},
    mt !== undefined && {marginTop: spacing[mt]},
    mv !== undefined && {marginVertical: spacing[mv]},
    ml !== undefined && {marginLeft: spacing[ml]},
    mr !== undefined && {marginLeft: spacing[mr]},
  ]);
};
