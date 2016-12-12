import * as React from 'react';
import * as classNames from 'classnames';

interface IContainerProps extends React.Props<any> {
  fullSize?: boolean;
  testid?: string;
};

export default function Container({
  fullSize = false,
  children = null,
  testid = ''
}: IContainerProps) {
  const containerClasses = classNames(
    fullSize 
      ? 'container-fluid' 
      : 'container'
  );

  return (
    <div data-testid={ testid } className={ containerClasses }>
      { children }
    </div>
  );
}
