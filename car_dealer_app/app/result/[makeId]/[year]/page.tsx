import { fetchCars, fetchMakes } from '@/lib/FetchCars';
import Link from 'next/link';
import { createYearsArray } from '@/lib/CreateYearsArray';

export async function generateStaticParams() {
  const data = await fetchMakes();
  const years = createYearsArray();

  return data.flatMap((make) => {
    return years.map((year) => ({
      makeId: make.Make_ID.toString(),
      year: year.toString(),
    }));
  });
}

interface Params {
  params: { makeId: string; year: string };
}

export default async function ResultPage({ params }: Params) {
  const { makeId, year } = await params;
  const cars = await fetchCars(Number(makeId), Number(year));

  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Vehicle Models</h1>
      {cars.length > 0 ? (
        <ul className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 space-y-4">
          {cars.map((car) => (
            <li
              key={car.Model_ID}
              className="flex justify-center p-4 border-l-4 border-r-4 border-blue-500 bg-gray-50 rounded-lg"
            >
              <span className="text-lg font-semibold text-gray-700">
                {car.MakeName}
              </span>
              <span className="text-gray-600 block">{car.Model_Name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 text-lg">
          No models found for this selection.
        </p>
      )}
      <Link
        href="/"
        className="mt-10 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Back to Search
      </Link>
    </main>
  );
}
