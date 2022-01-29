import { ImgHTMLAttributes } from 'react';
import { ExtendStyles } from '../shared/types';

export interface ImageProps
  extends ImgHTMLAttributes<HTMLImageElement>,
    ExtendStyles {}
