'use client';

import { mockApi } from '@/utils/mockApi';
import { Input, Loader, Select } from '@components';
import { useEffect, useMemo, useState } from 'react';
import data from '../data/vehicles.json';
import { Car } from '@types';
import Card from '../components/card/card';
import { search } from '@/utils/search';

export default function Home() {
  const [carData, setCarData] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState('');
  const [sortedData, setSortedData] = useState('');

  const options = [
    { value: 'price-asc', label: 'Price (lowest)' },
    { value: 'price-desc', label: 'Price (highest)' },
    { value: 'mileage-asc', label: 'Mileage (lowest)' },
    { value: 'mileage-desc', label: 'Mileage (highest)' },
    { value: 'year-asc', label: 'Year (oldest)' },
    { value: 'year-desc', label: 'Year (newest)' },
  ];

  useEffect(() => {
    const getData = async () => {
      const vehicleData = await mockApi(data);

      setCarData(vehicleData);
      setLoading(false);
    };

    getData();
  }, []);

  const filteredCars = useMemo(
    () => search(searchData, sortedData, carData),
    [carData, searchData, sortedData]
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

      {loading && (
        <div className="mt-20 w-14 mx-auto">
          <Loader />
        </div>
      )}

      {carData && (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4 mt-10">
          {filteredCars.map((val) => (
            <Card key={val.id} car={val} link={`details/${val.id}`} />
          ))}
        </div>
      )}
    </section>
  );
}
