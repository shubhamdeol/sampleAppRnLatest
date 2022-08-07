import {spacing} from './constants';

export type Spacing = typeof spacing;

export interface MarginPaddingProps {
  p?: keyof Spacing | undefined;
  pt?: keyof Spacing | undefined;
  pv?: keyof Spacing | undefined;
  pb?: keyof Spacing | undefined;
  ph?: keyof Spacing | undefined;
  pl?: keyof Spacing | undefined;
  pr?: keyof Spacing | undefined;
  m?: keyof Spacing | undefined;
  mt?: keyof Spacing | undefined;
  mv?: keyof Spacing | undefined;
  mb?: keyof Spacing | undefined;
  mh?: keyof Spacing | undefined;
  ml?: keyof Spacing | undefined;
  mr?: keyof Spacing | undefined;
}
