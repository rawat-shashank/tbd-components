import React from 'react';
import { Icon } from '../../icons/Icon';
import { StyledLabelButton } from './LabelButton.styles';
import { LabelButtonProps } from './LabelButton.types';

/**
 * Display label button with/without svg icon.
 *
 * >LabelButton component comes with default styles which can be overriden
 * by using either classname or style.
 */
export const LabelButton = ({
  label = 'Label Button',
  icon,
  className,
  style,
  variant = 'primary',
  disabled,
}: LabelButtonProps) => {
  const classes = className ? [className] : [];
  switch (variant) {
    case 'primary':
      if (disabled) break;
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
    <StyledLabelButton
      className={classes.length && classes.join(' ')}
      style={style}
      disabled={disabled}
      data-testid="label-button"
    >
      {icon && (
        <Icon
          name={icon}
          height="1.5rem"
          width="1.5rem"
          style={{ marginRight: '0.75rem' }}
        />
      )}
      {label}
    </StyledLabelButton>
  );
};
