import React from 'react';
import { IconProps } from './Icon.types';

import { ArrowUp } from './ArrowUp';
import { ArrowBackward } from './ArrowBackward';
import { ArrowDown } from './ArrowDown';
import { ArrowForward } from './ArrowForward';
import { Figma } from './Figma';
import { Globe } from './Globe';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Mail } from './Mail';
import { Menu } from './Menu';
import { Sun } from './Sun';
import { Moon } from './Moon';
import { System } from './System';

/**
 * Display an svg icon as react component.
 */
export const Icon = ({ name, width, height, className, style }: IconProps) =>
  ({
    'arrow-up': (
      <ArrowUp
        width={width}
        height={height}
        className={className}
        style={style}
      />
    ),
    'arrow-down': (
      <ArrowDown
        width={width}
        height={height}
        className={className}
        style={style}
      />
    ),
    'arrow-backward': (
      <ArrowBackward
        width={width}
        height={height}
        className={className}
        style={style}
      />
    ),
    'arrow-forward': (
      <ArrowForward
        width={width}
        height={height}
        className={className}
        style={style}
      />
    ),
    figma: (
      <Figma
        width={width}
        height={height}
        className={className}
        style={style}
      />
    ),
    globe: (
      <Globe
        width={width}
        height={height}
        className={className}
        style={style}
      />
    ),
    'image-placeholder': (
      <ImagePlaceholder
        width={width}
        height={height}
        className={className}
        style={style}
      />
    ),
    mail: (
      <Mail width={width} height={height} className={className} style={style} />
    ),
    menu: (
      <Menu width={width} height={height} className={className} style={style} />
    ),
    sun: (
      <Sun width={width} height={height} className={className} style={style} />
    ),
    moon: (
      <Moon width={width} height={height} className={className} style={style} />
    ),
    system: (
      <System
        width={width}
        height={height}
        className={className}
        style={style}
      />
    ),
  }[name]);
