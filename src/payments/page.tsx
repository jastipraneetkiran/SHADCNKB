import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

function getData(): Payment[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      "id": "43a1c9f2",
      "amount": 43,
      "status": "success",
      "email": "rachel@example.com"
    },
    {
      "id": "91d4b6a5",
      "amount": 91,
      "status": "pending",
      "email": "john.doe@example.com"
    },
    {
      "id": "13c2e7f1",
      "amount": 67,
      "status": "failed",
      "email": "jane.smith@example.com"
    },
    {
      "id": "65b3d4a2",
      "amount": 25,
      "status": "success",
      "email": "bob.johnson@example.com"
    },
    {
      "id": "98e1c4f3",
      "amount": 82,
      "status": "pending",
      "email": "alice.williams@example.com"
    },
    {
      "id": "21d6e5f4",
      "amount": 39,
      "status": "failed",
      "email": "mike.davis@example.com"
    },
    {
      "id": "46a2c9f1",
      "amount": 96,
      "status": "success",
      "email": "emily.chen@example.com"
    },
    {
      "id": "14b7e3f2",
      "amount": 51,
      "status": "pending",
      "email": "david.lee@example.com"
    },
    {
      "id": "67d1c4a3",
      "amount": 28,
      "status": "failed",
      "email": "sarah.taylor@example.com"
    },
    {
      "id": "85e2f1d4",
      "amount": 74,
      "status": "success",
      "email": "kevin.white@example.com"
    },
    {
      "id": "32a1c9e5",
      "amount": 49,
      "status": "pending",
      "email": "olivia.martin@example.com"
    },
    {
      "id": "19d6e4f3",
      "amount": 62,
      "status": "failed",
      "email": "william.hall@example.com"
    },
    {
      "id": "48b3d2a1",
      "amount": 89,
      "status": "success",
      "email": "ava.garcia@example.com"
    },
    {
      "id": "11c7e3f2",
      "amount": 35,
      "status": "pending",
      "email": "isabella.diaz@example.com"
    },
    {
      "id": "64a2c9e1",
      "amount": 98,
      "status": "failed",
      "email": "sophia.lopez@example.com"
    },
    {
      "id": "27d1c4a3",
      "amount": 71,
      "status": "success",
      "email": "mason.martinez@example.com"
    },
    {
      "id": "93e2f1d4",
      "amount": 44,
      "status": "pending",
      "email": "logan.hernandez@example.com"
    },
    {
      "id": "16b7e3f2",
      "amount": 58,
      "status": "failed",
      "email": "alexander.gomez@example.com"
    },
    {
      "id": "42a1c9f2",
      "amount": 93,
      "status": "success",
      "email": "jackson.rodriguez@example.com"
    },
    {
      "id": "68d1c4a3",
      "amount": 29,
      "status": "pending",
      "email": "julia.gonzalez@example.com"
    },
    {
      "id": "95e2f1d4",
      "amount": 76,
      "status": "failed",
      "email": "noah.allen@example.com"
    },
    {
      "id": "31a1c9e5",
      "amount": 48,
      "status": "success",
      "email": "lucas.brown@example.com"
    },
    {
      "id": "18d6e4f3",
      "amount": 63,
      "status": "pending",
      "email": "oliver.davis@example.com"
    },
    {
      "id": "47b3d2a1",
      "amount": 88,
      "status": "failed",
      "email": "benjamin.miller@example.com"
    },
    {
      "id": "12c7e3f2",
      "amount": 36,
      "status": "success",
      "email": "logan.wilson@example.com"
    },
    {
      "id": "66a2c9e1",
      "amount": 99,
      "status": "pending",
      "email": "caleb.martin@example.com"
    },
    {
      "id": "28d1c4a3",
      "amount": 72,
      "status": "failed",
      "email": "jason.lee@example.com"
    },
    {
      "id": "94e2f1d4",
      "amount": 45,
      "status": "success",
      "email": "matthew.garcia@example.com"
    },
    {
      "id": "15b7e3f2",
      "amount": 59,
      "status": "pending",
      "email": "christopher.hernandez@example.com"
    },
    {
      "id": "41a1c9f2",
      "amount": 92,
      "status": "failed",
      "email": "anthony.rodriguez@example.com"
    },
    {
      "id": "69d1c4a3",
      "amount": 30,
      "status": "success",
      "email": "joseph.gonzalez@example.com"
    },
    {
      "id": "96e2f1d4",
      "amount": 77,
      "status": "pending",
      "email": "andrew.allen@example.com"
    },
    {
      "id": "30a1c9e5",
      "amount": 47,
      "status": "failed",
      "email": "william.brown@example.com"
    },
    // ...
  ]
}

export default function DemoPage() {
  const data = getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
