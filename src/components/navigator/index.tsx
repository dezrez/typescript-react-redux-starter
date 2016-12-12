import * as React from 'react';

interface INavigatorProps extends React.Props<any> {
  testid?: string;
}

export default function Navigator({
  children = null,
  testid = ''
}: INavigatorProps) {
  return (
    <nav
      data-testid={ testid }
      className="navbar navbar-light bg-faded">
      { children }
    </nav>
  );
}
