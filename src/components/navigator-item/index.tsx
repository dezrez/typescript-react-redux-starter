import * as React from 'react';
import * as classNames from 'classnames';
import { Link, Router } from 'react-router';

interface INavigatorItemProps extends React.Props<any> {
  isVisible?: boolean;
  to?: string;
  ml?: boolean;
  isActive?: boolean;
};

export default function NavigatorItem({
  children = null,
  isVisible = true,
  to = '',
  isActive = ''
}: INavigatorItemProps) {
  const navItemClasses = classNames('truncate', {
    hide: !isVisible,
    'nav-item': true,
    active: to === isActive
  });
  
  return (
    <li className={ navItemClasses }>
      {to === '' 
        ? <a className="nav-link">{children}</a> 
        : <Link className="nav-link" to={to}>
            { children }
          </Link>
      }
    </li>
  );
};
