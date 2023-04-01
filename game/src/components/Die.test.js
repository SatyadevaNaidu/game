import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Die from './Die';

describe('Die', () => {
  test('renders a die component', () => {
    render(<Die />);
    const dieElement = screen.getByTestId('die');
    expect(dieElement).toBeInTheDocument();
  });

  test('calls onRoll when die is rolled', () => {
    const onRollMock = jest.fn();
    render(<Die onRoll={onRollMock} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onRollMock).toHaveBeenCalled();
  });
});
