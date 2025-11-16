'use client';

import { mockApi } from '@/utils/mockApi';
import { Card, Input, Loader, Select } from '@components';
import { useMemo, useState } from 'react';
import carData from '../data/vehicles.json';
import { Car } from '@types';
import { search } from '@/utils/search';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const [searchData, setSearchData] = useState('');
  const [sortedData, setSortedData] = useState('');

  const { data, isLoading } = useQuery({
    queryKey: ['vehicles'],
    queryFn: async (): Promise<Car[]> => {
      const vehicleData = await mockApi(carData);

      return vehicleData;
    },
  });

  const options = [
    { value: 'price-asc', label: 'Price (lowest)' },
    { value: 'price-desc', label: 'Price (highest)' },
    { value: 'mileage-asc', label: 'Mileage (lowest)' },
    { value: 'mileage-desc', label: 'Mileage (highest)' },
    { value: 'year-asc', label: 'Year (oldest)' },
    { value: 'year-desc', label: 'Year (newest)' },
  ];

  const filteredCars = useMemo(
    () => search(searchData, sortedData, data ?? []),
    [data, searchData, sortedData]
  );

  return (
    <section>
      <h1 className="underline underline-offset-4 decoration-primary text-3xl  text-primary">
        Vehicles
      </h1>

      <div className="flex gap-5 justify-between mt-8">
        <Input
          type="text"
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
        <Select options={options} onChange={(e) => setSortedData(e.target.value)} />
      </div>

      {isLoading && (
        <div className="mt-20 w-14 mx-auto">
          <Loader />
        </div>
      )}

      {data && (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4 mt-10">
          {filteredCars.map((val) => (
            <Card key={val.id} car={val} link={`details/${val.id}`} />
          ))}
        </div>
      )}
    </section>
  );
}
