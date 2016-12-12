import * as React from 'react';
import * as classNames from 'classnames';

interface IColumnProps extends React.Props<any> {
  size: number;
  testid?: string;
  widths?: string[];
};

export default function Row({
  size = 12,
  children = null,
  testid = '',
  widths = ['xs']
}: IColumnProps) {
  const colWidths = [];
  widths.forEach(element => {
      colWidths.push(`col-${element}-${size}`);
  });
  const columnClasses = classNames(colWidths);

  return (
    <div data-testid={ testid } className={ columnClasses }>
      { children }
    </div>
  );
}
