import images from "@/constants/images";

export interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  property: string;
  unit: string;
  leaseStart: string;
  leaseEnd: string;
  rentAmount: number;
  status: "active" | "past_due" | "notice_given";
  paymentHistory: {
    month: string;
    status: "paid" | "partial" | "late" | "unpaid";
    amount: number;
    date?: string;
  }[];
  imageUrl: string;
}

// Mock data for tenants
export const mockTenants: Tenant[] = [
  {
    id: "1",
    name: "Tunde Balogun",
    email: "tunde.balogun@gmail.com",
    phone: "0803 123 4567",
    property: "Adenuga Apartments",
    unit: "Flat 1A",
    leaseStart: "2024-06-01",
    leaseEnd: "2025-05-31",
    rentAmount: 650000,
    status: "active",
    paymentHistory: [
      { month: "May 2025", status: "paid", amount: 650000, date: "2025-05-01" },
      {
        month: "April 2025",
        status: "paid",
        amount: 650000,
        date: "2025-04-02",
      },
      {
        month: "March 2025",
        status: "paid",
        amount: 650000,
        date: "2025-03-01",
      },
    ],
    imageUrl: images.headshot2,
  },
  {
    id: "2",
    name: "Chiamaka Okoye",
    email: "chiamaka.okoye@yahoo.com",
    phone: "0812 456 7890",
    property: "Peace Court Estate",
    unit: "Unit 3B",
    leaseStart: "2024-08-15",
    leaseEnd: "2025-08-14",
    rentAmount: 900000,
    status: "past_due",
    paymentHistory: [
      { month: "May 2025", status: "unpaid", amount: 0 },
      {
        month: "April 2025",
        status: "late",
        amount: 900000,
        date: "2025-04-10",
      },
      {
        month: "March 2025",
        status: "paid",
        amount: 900000,
        date: "2025-03-01",
      },
    ],
    imageUrl: images.headshot1,
  },
  {
    id: "3",
    name: "Ifeanyi Eze",
    email: "ifeanyi.eze@mail.com",
    phone: "0806 765 4321",
    property: "Emerald Heights",
    unit: "Suite 5A",
    leaseStart: "2024-03-01",
    leaseEnd: "2025-08-31",
    rentAmount: 680000,
    status: "notice_given",
    paymentHistory: [
      { month: "May 2025", status: "paid", amount: 680000, date: "2025-05-01" },
      {
        month: "April 2025",
        status: "paid",
        amount: 680000,
        date: "2025-04-01",
      },
      {
        month: "March 2025",
        status: "paid",
        amount: 680000,
        date: "2025-03-02",
      },
    ],
    imageUrl: images.headshot3,
  },
  {
    id: "4",
    name: "Amina Bello",
    email: "amina.bello@gmail.com",
    phone: "0902 345 6789",
    property: "Harmony Villas",
    unit: "Villa 2",
    leaseStart: "2024-05-15",
    leaseEnd: "2025-05-14",
    rentAmount: 400000,
    status: "active",
    paymentHistory: [
      { month: "May 2025", status: "paid", amount: 400000, date: "2025-05-01" },
      {
        month: "April 2025",
        status: "partial",
        amount: 200000,
        date: "2025-04-05",
      },
      {
        month: "March 2025",
        status: "paid",
        amount: 400000,
        date: "2025-03-01",
      },
    ],
    imageUrl: images.headshot4,
  },
  {
    id: "5",
    name: "Segun Adeniyi",
    email: "segun.adeniyi@outlook.com",
    phone: "0706 987 1234",
    property: "Silverline Plaza",
    unit: "Office 4C",
    leaseStart: "2024-01-01",
    leaseEnd: "2025-12-31",
    rentAmount: 750000,
    status: "active",
    paymentHistory: [
      { month: "May 2025", status: "paid", amount: 750000, date: "2025-05-01" },
      {
        month: "April 2025",
        status: "paid",
        amount: 750000,
        date: "2025-04-01",
      },
      {
        month: "March 2025",
        status: "paid",
        amount: 750000,
        date: "2025-03-01",
      },
    ],
    imageUrl: images.headshot2,
  },
];