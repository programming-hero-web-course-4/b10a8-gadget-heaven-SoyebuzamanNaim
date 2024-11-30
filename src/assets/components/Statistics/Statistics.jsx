import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useGadgets } from "../../contexts/GadgetProvider";

const Statistics = () => {
  const { gadgets } = useGadgets();

  const chartData = gadgets.map((gadget) => ({
    Name: gadget.product_title,
    Price: gadget.price,
  }));

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Product Statistics
      </h2>
      <ResponsiveContainer className={`mx-auto`} width="90%" height={400}>
        <ComposedChart data={chartData}>
          <XAxis
            dataKey="Name"
            className="text-[10px] "
            height={60}
            angle={-20}
            interval={0}
            textAnchor="end"
          />
          <YAxis dataKey="Price" />
          <Tooltip />

          <Bar dataKey="Price" barSize={30} fill="#8E24AA" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
