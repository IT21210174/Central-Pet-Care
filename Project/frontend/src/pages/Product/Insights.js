import React from 'react'
import AdminLayout from '../Layouts/AdminLayout'
import Chart from "../../components/chart/Chart";

export const productData = [
    {
      name: "Jan",
      "Sales": 4000,
    },
    {
      name: "Feb",
      "Sales": 3000,
    },
    {
      name: "Mar",
      "Sales": 5000,
    },
    {
      name: "April",
      "Sales": 15000,
    },
  ];

function Insights() {
  return (
    <AdminLayout>
        <div>Insights</div>

        <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
    </AdminLayout>
  )
}

export default Insights