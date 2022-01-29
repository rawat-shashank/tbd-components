import React from 'react';
import { Icon } from '../../icons/Icon';
import { StyledIconButton } from './IconButton.styles';
import { IconButtonProps } from './IconButton.types';

/**
 * Display a Icon button.
 *
 * >IconButton component comes with default styles which can be overriden
 * by using either classname or style.
 */
export const IconButton = ({
  icon,
  className,
  style,
  disabled,
  onClick,
  variant = 'default',
}: IconButtonProps) => {
  const classes = className ? [className] : [];
  switch (variant) {
    case 'primary':
      classes.push('primary');
      break;

    case 'outline':
      classes.push('outline');
      break;

    case 'active':
      classes.push('active');
      break;

    default:
      break;
  }

  return (
    <StyledIconButton
      className={classes.length && classes.join(' ')}
      style={style}
      disabled={disabled}
      data-testid="icon-button"
      onClick={onClick}
    >
      <Icon name={icon} height="1.5rem" width="1.5rem" />
    </StyledIconButton>
  );
};
