import React from 'react';

import { ArrowUp } from './ArrowUp';
import { ArrowBackward } from './ArrowBackward';
import { IconProps } from './Icon.types';
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
export const Icon = ({ name, width, height, className }: IconProps) =>
  ({
    'arrow-up': <ArrowUp width={width} height={height} className={className} />,
    'arrow-down': (
      <ArrowDown width={width} height={height} className={className} />
    ),
    'arrow-backward': (
      <ArrowBackward width={width} height={height} className={className} />
    ),
    'arrow-forward': (
      <ArrowForward width={width} height={height} className={className} />
    ),
    figma: <Figma width={width} height={height} className={className} />,
    globe: <Globe width={width} height={height} className={className} />,
    'image-placeholder': (
      <ImagePlaceholder width={width} height={height} className={className} />
    ),
    mail: <Mail width={width} height={height} className={className} />,
    menu: <Menu width={width} height={height} className={className} />,
    sun: <Sun width={width} height={height} className={className} />,
    moon: <Moon width={width} height={height} className={className} />,
    system: <System width={width} height={height} className={className} />,
  }[name]);
