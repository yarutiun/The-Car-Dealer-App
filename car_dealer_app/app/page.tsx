'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchMakes } from '@/lib/FetchCars';
import { createYearsArray } from '@/lib/CreateYearsArray';

export default function Home() {
  const [makes, setMakes] = useState<{ Make_ID: number; Make_Name: string }[]>(
    []
  );
  const [selectedMake, setSelectedMake] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const years = createYearsArray();

  useEffect(() => {
    const getMakes = async () => {
      try {
        const data = await fetchMakes();
        setMakes(data);
      } catch (error) {
        console.error('Error fetching makes:', error);
      }
    };
    getMakes();
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <section className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Car Dealer Filter
        </h1>
        <div className="flex flex-col gap-6">
          <label className="flex flex-col gap-2 text-gray-700">
            Vehicle Make
            <select
              className="border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSelectedMake(Number(e.target.value))}
              defaultValue=""
            >
              <option value="" disabled>
                Select a vehicle make
              </option>
              {makes.length > 0 ? (
                makes.map((make) => (
                  <option key={make.Make_ID} value={make.Make_ID}>
                    {make.Make_Name}
                  </option>
                ))
              ) : (
                <option disabled>Loading...</option>
              )}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-gray-700">
            Model Year
            <select
              className="border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              defaultValue=""
            >
              <option value="" disabled>
                Select a model year
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>
        </div>

        <Link
          href={
            selectedMake && selectedYear
              ? `/result/${selectedMake}/${selectedYear}`
              : '#'
          }
          className={`mt-6 block text-center px-6 py-3 rounded-lg font-semibold text-white transition ${
            selectedMake && selectedYear
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Next
        </Link>
      </section>
    </main>
  );
}
