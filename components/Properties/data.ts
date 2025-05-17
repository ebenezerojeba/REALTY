import images from "@/constants/images";

// / Define property interface
export interface Property {
  id: string;
  name: string;
  address: string;
  type: string;
  units: number;
  occupancyRate: number;
  monthlyIncome: number;
  yearlyIncome: number;
  imageUrl: string;
}

// Mock data for properties
export const mockProperties: Property[] = [
  {
    id: '1',
    name: 'Adenuga Apartments',
    address: '60 Bourdillon Road, Ikoyi, Lagos',
    type: 'Luxury Apartment Building',
    units: 12,
    occupancyRate: 92,
    monthlyIncome: 7800000, // ₦650,000 per unit avg
    yearlyIncome: 7800000 * 12,
    imageUrl: images.house8
  },
  {
    id: '2',
    name: 'Peace Court Estate',
    address: 'Plot 18, Gwarinpa Estate, Abuja',
    type: 'Terraced Duplex Estate',
    units: 6,
    occupancyRate: 100,
    monthlyIncome: 5400000, // ₦900,000 per duplex
    yearlyIncome: 5400000 * 12,
    imageUrl: images.house1
  },
  {
    id: '3',
    name: 'Emerald Heights',
    address: 'Lekki Phase 1, Lagos',
    type: 'Serviced Apartments',
    units: 10,
    occupancyRate: 85,
    monthlyIncome: 6800000, // Avg ₦680k monthly from all units
    yearlyIncome: 6800000 * 12,
    imageUrl: images.house3
  },
  {
    id: '4',
    name: 'Harmony Villas',
    address: 'Eleyele Road, Ibadan, Oyo State',
    type: 'Detached Bungalow Compound',
    units: 4,
    occupancyRate: 100,
    monthlyIncome: 1600000, // ₦400,000 each
    yearlyIncome: 1600000 * 12,
    imageUrl: images.house4
  },
  {
    id: '5',
    name: 'Silverline Plaza',
    address: 'Rumuola, Port Harcourt, Rivers State',
    type: 'Mixed-Use Commercial Building',
    units: 8,
    occupancyRate: 75,
    monthlyIncome: 6000000, // Rental from shops/offices
    yearlyIncome: 6000000 * 12,
    imageUrl: images.house6
  },
];
