import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  type: string;
};

const Input = ({ type = 'text', ...props }: Props) => (
  <input
    type={type}
    className="w-full pl-2 py-1 rounded border border-primary focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    placeholder="Search for make & model"
    {...props}
  />
);

export default Input;
