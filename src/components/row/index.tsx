import * as React from 'react';
import * as classNames from 'classnames';

interface IRowProps extends React.Props<any> {
  testid?: string;
};

export default function Row({
  children = null,
  testid = ''
}: IRowProps) {
  const rowClasses = classNames('row');

  return (
    <div data-testid={ testid } className={ rowClasses }>
      { children }
    </div>
  );
}
