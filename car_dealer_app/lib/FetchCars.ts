export interface VehicleMake {
  Make_ID: number;
  Make_Name: string;
}

export interface Car {
  MakeId: number;
  MakeName: string;
  Model_ID: number;
  Model_Name: string;
}

// Fetch Vehicle Makes
export const fetchMakes = async (): Promise<VehicleMake[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_VEHICLE_MAKES_API_URL;

  if (!apiUrl) {
    throw new Error('API URL is not defined in .env.local');
  }

  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`,
    { cache: 'no-store' }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch vehicle makes: ${response.statusText}`);
  }

  const data = await response.json();

  return data.Results.map((make: Car) => ({
    Make_ID: make.MakeId,
    Make_Name: make.MakeName,
  }));
};

// Fetch Vehicle Models for Selected Make & Year
export const fetchCars = async (
  makeId: number,
  year: number
): Promise<Car[]> => {
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    { cache: 'no-store' }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch cars: ${response.statusText}`);
  }

  const data = await response.json();
  return data.Results;
};
