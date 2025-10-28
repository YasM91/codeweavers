import { Car } from '@types';
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  car: Car;
  link: string;
}

const Card = ({ car, link }: Props) => {
  return (
    <Link href={link}>
      <div className="max-w-sm w-full bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-secondary hover:shadow-md transition-all duration-200 md:hover:scale-105 ease-in-out p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-primary">
            {car.year} {car.make} {car.model}
          </h2>
          <span
            className="text-xs font-medium text-secondary px-2 py-2 border-black border rounded"
            style={{ backgroundColor: car.colour }}
          />
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <span>Mileage</span>
          <span>{car.mileage.toLocaleString()} miles</span>
        </div>

        <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
          <span className="text-gray-500 text-sm">Price</span>
          <span className="text-2xl font-bold text-primary">£{car.price.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
