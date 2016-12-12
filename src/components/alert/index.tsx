import * as React from 'react';
import * as classNames from 'classnames';

interface IAlertProps extends React.Props<any> {
  isVisible?: boolean;
  status?: string;
  id?: string;
  testid?: string;
};

const statusClasses = {
  info: 'alert alert-info',
  warning: 'alert alert-warning',
  success: 'alert alert-success',
  error: 'alert alert-danger',
};

export default function Alert({
  children = null,
  isVisible,
  status = 'info',
  id = '',
  testid = ''
}: IAlertProps) {
  const alertClasses = classNames(['p2', 'bold'], {
    block: isVisible,
    hide: !isVisible,
    [statusClasses[status]]: true,
  });

  return (
    <div
      id={ id }
      data-testid={ testid }
      className={ alertClasses }>
      { children }
    </div>
  );
};
