# Car Dealer Filter

A Next.js web application that allows users to filter and view vehicle models based on their make and model year. The app fetches car make and model data from an external API and will enable users to navigate through different vehicle options.

## Features

- Vehicle Make Filter: Select a vehicle make from a dynamically fetched list.
- Model Year Filter: Choose a model year to narrow down car options.
- Vehicle Model Display: A list of available models is displayed after selecting a make and year.
- Responsive Design: The app is fully responsive and optimized for mobile and desktop use.
- Integration with External API: Fetches data from the National Highway Traffic Safety Administration (NHTSA) API.

## Technologies Used

- Next.js (for SSR and static site generation)
- TypeScript (for type safety)
- React (for UI components)
- Tailwind CSS (for styling)
- Prettier (for code formatting)
- ESLint (for linting)

## Setup

### Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [TypeScript](https://www.typescriptlang.org/)

### Steps to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/car-dealer-filter.git
  
2. Navigate to the directory:
   ```bash
   cd car_dealer_app

3. Install all dependencies:
   ```bash
   npm install

4. Set up environment variables (optional, if you want to set an endpoint in .env.local file):
   ```bash
   NEXT_PUBLIC_VEHICLE_MAKES_API_URL=https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json

5. Run the server locally:
   ```bash
   npm run dev

6. Open the application in your browser:
   ```bash
   http://localhost:3000
