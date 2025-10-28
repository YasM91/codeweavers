import { render, screen } from '@testing-library/react';
import Input from './input';

describe('Input component', () => {
  it('renders input ', () => {
    render(<Input type="text" />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
