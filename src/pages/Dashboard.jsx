import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Dashboard"
        breadcrumb={["Dashboard", "Overview"]}
      >
        <button className="bg-hijau text-white px-4 py-2 rounded-lg font-semibold shadow-sm hover:opacity-90 transition">
          + Add Data
        </button>
      </PageHeader>

      {/* Statistik Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        
        <Card className="bg-white p-6 rounded-xl shadow-sm border border-garis">
          <p className="text-sm text-teks-samping">Total Revenue</p>
          <h3 className="text-2xl font-bold mt-2">Rp 24.500.000</h3>
          <p className="text-sm text-hijau mt-2">+12% from last month</p>
        </Card>

        <Card className="bg-white p-6 rounded-xl shadow-sm border border-garis">
          <p className="text-sm text-teks-samping">Total Orders</p>
          <h3 className="text-2xl font-bold mt-2">1,245</h3>
          <p className="text-sm text-biru mt-2">+8% from last month</p>
        </Card>

        <card className="bg-white p-6 rounded-xl shadow-sm border border-garis">
          <p className="text-sm text-teks-samping">New Customers</p>
          <h3 className="text-2xl font-bold mt-2">320</h3>
          <p className="text-sm text-hijau mt-2">+5% growth</p>
        </card>

        <Card className="bg-white p-6 rounded-xl shadow-sm border border-garis">
          <p className="text-sm text-teks-samping">Pending Orders</p>
          <h3 className="text-2xl font-bold mt-2">18</h3>
          <p className="text-sm text-merah mt-2">Needs attention</p>
        </Card>

      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-garis p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-teks-samping border-b border-garis">
                <th className="pb-3">Order ID</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-garis">
              <tr>
                <td className="py-3">#1001</td>
                <td>Andi Pratama</td>
                <td>Rp 250.000</td>
                <td className="text-hijau font-medium">Completed</td>
              </tr>
              <tr>
                <td className="py-3">#1002</td>
                <td>Siti Rahma</td>
                <td>Rp 420.000</td>
                <td className="text-kuning font-medium">Processing</td>
              </tr>
              <tr>
                <td className="py-3">#1003</td>
                <td>Budi Santoso</td>
                <td>Rp 180.000</td>
                <td className="text-merah font-medium">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}