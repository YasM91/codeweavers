import { CarInfo, FinanceCalculator } from '@components';
import data from '../../../data/vehicles.json';
import Link from 'next/link';

export default async function details({ params }: PageProps<'/details/[slug]'>) {
  const { slug } = await params;

  const filteredCars = () => {
    return data.filter((c) => c.id === slug)[0];
  };

  return (
    <section>
      <Link href="/">Back to vehicles page</Link>

      <h1 className="underline underline-offset-4 decoration-primary text-3xl  text-primary mt-5">
        Details
      </h1>
      <div className="grid  md:grid-cols-2 grid-cols-1  gap-4 mt-10">
        <CarInfo car={filteredCars()} />
        <FinanceCalculator vehiclePrice={filteredCars().price} />
      </div>
    </section>
  );
}
