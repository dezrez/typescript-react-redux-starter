import * as React from 'react';
import * as classNames from 'classnames';

interface IButtonProps extends React.Props<any> {
  onClick?: () => void;
  type?: string;
  className?: string;
  buttonType?: string;
  outline?: boolean;
  id?: string;
  testid?: string;
};

export default function Button({
  onClick = null,
  type = 'button',
  className = '',
  buttonType = 'primary',
  outline = true,
  id = '',
  testid = '',
  children = null
}: IButtonProps) {
  const buttonClasses = classNames('btn', 
    outline ? `btn-outline-${buttonType}` : `btn-${buttonType}`, className);

  return (
    <button
      data-testid={ testid }
      id={ id }
      type={ type }
      className={ buttonClasses }
      onClick={ onClick }>
      { children }
    </button>
  );
}
