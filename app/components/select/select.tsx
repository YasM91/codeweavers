import { SelectHTMLAttributes } from 'react';

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
};

const Select = ({ options, ...props }: Props) => (
  <select
    className="w-full pl-2 py-1 rounded border border-primary focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white"
    {...props}
  >
    <option value="">Select an option</option>
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

export default Select;
