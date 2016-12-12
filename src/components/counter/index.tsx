import * as React from 'react';

import Button from '../button';

interface ICounterProps extends React.Props<any> {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

export default function Counter({
  counter,
  increment,
  decrement
}: ICounterProps) {
  return (
    <div className="row">
      <Button
        testid="counter-decrementButton"
        id="qa-decrement-button"
        className="col-xs-1"
        onClick={decrement}>
        -
      </Button>

      <div
        data-testid="counter-result"
        id="qa-counter-div"
        className="col-xs-2 center h1">
        {counter}
      </div>

      <Button
        testid="counter-incrementButton"
        id="qa-increment-button"
        className="col-xs-1"
        onClick={increment}>
        +
      </Button>
    </div>
  );
}
