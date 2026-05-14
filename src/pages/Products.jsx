import PageHeader from "../components/PageHeader";
import products from "../data/products";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Products"
        breadcrumb={["Dashboard", "Products"]}
      />

      {/* TABLE */}
      <div className="bg-white p-6 rounded-2xl shadow-md overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="text-left text-gray-400 text-sm border-b">
              <th className="pb-3">ID</th>
              <th>Title</th>
              <th>Code</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="py-3 font-medium">
                  {item.id}
                </td>

                {/* LINK DETAIL */}
                <td>
                  <Link
                    to={`/products/${item.id}`}
                    className="text-hijau hover:underline font-medium"
                  >
                    {item.title}
                  </Link>
                </td>

                <td>{item.code}</td>

                <td className="text-gray-500">
                  {item.category}
                </td>

                <td>{item.brand}</td>

                <td>
                  Rp {item.price.toLocaleString()}
                </td>

                {/* BADGE STOCK */}
                <td>
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-semibold

                    ${item.stock > 10
                      ? "bg-green-100 text-green-600"
                      : ""}

                    ${item.stock <= 10 && item.stock > 5
                      ? "bg-yellow-100 text-yellow-600"
                      : ""}

                    ${item.stock <= 5
                      ? "bg-red-100 text-red-600"
                      : ""}
                  `}>
                    {item.stock}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}