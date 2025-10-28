import { render, screen } from '@testing-library/react';
import DropDown from './select';

describe('DropDown component', () => {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
  ];

  it('renders all options', () => {
    render(<DropDown options={options} value="banana" />);

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();

    options.forEach((opt) => {
      expect(screen.queryAllByRole('option')[0]).toBeInTheDocument();
    });
  });
});
