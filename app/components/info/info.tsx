import { Car } from '@types';

type Props = {
  car: Car;
};

const CarInfo = ({ car }: Props) => {
  return (
    <div className="border-2 border-primary rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-primary font-bold text-lg">
        {car.make} {car.model}
      </h2>
      <p className="text-secondary font-semibold">{car.year}</p>
      <p className="mt-2 text-gray-700">Price: ${car.price.toLocaleString()}</p>
      <p className="text-gray-700">Mileage: {car.mileage.toLocaleString()} km</p>
      <p className="text-gray-700">Colour: {car.colour}</p>
    </div>
  );
};

export default CarInfo;
