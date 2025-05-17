// Mock upcoming events
export const upcomingEvents = [
  {
    id: 1,
    title: "Property Inspection",
    property: "1, Main Street Idumota,",
    date: "2025-07-17",
  },
  {
    id: 2,
    title: "Lease Renewal",
    tenant: "Sarah Okoye",
    date: "2025-09-25",
  },
];

// Mock maintenance requests
export const maintenanceItems = [
  {
    id: 1,
    title: "Leaking faucet",
    property: "4B, Ago Palace, Fetsac Town",
    priority: "high",
    date: "2025-05-16",
  },
  {
    id: 2,
    title: "Broken AC unit",
    property: "40, Osinfolarin, Akoka",
    priority: "medium",
    date: "2025-05-17",
  },
  {
    id: 3,
    title: "Light fixture replacement",
    property: "0, Agbara, Akok",
    priority: "low",
    date: "2025-05-18",
  },
];

export const upcomingPayments = [
  {
    id: 1,
    tenant: "Oluwashola Adeniyi",
    property: "4B, Ago Palace, Fetsac Town",
    amount: 300000,
    dueDate: "2025-05-20",
    status: "pending",
  },
  {
    id: 2,
    tenant: "Suyi Banke",
    property: "40, Osinfolarin, Akoka",
    amount: 1500000,
    dueDate: "2025-05-22",
    status: "pending",
  },
  {
    id: 3,
    tenant: "Fola Harrison",
    property: "90, Agbara, Akoka",
    amount: 1000000,
    dueDate: "2025-05-22",
    status: "pending",
  },
];
