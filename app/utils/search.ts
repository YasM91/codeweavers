import { Car } from '@types';

export const search = (search: string, sort: string, data: Car[]) => {
  // price-asc become price and asc
  const [splitVal, direction] = sort.split('-') as [
    keyof Pick<Car, 'year' | 'price' | 'mileage'>,
    'asc' | 'desc',
  ];

  search = search.toLowerCase();
  return data
    .filter(
      (c: Car) => c.make.toLowerCase().includes(search) || c.model.toLowerCase().includes(search)
    )
    .sort((a, b) => (direction === 'asc' ? a[splitVal] - b[splitVal] : b[splitVal] - a[splitVal]));
};
