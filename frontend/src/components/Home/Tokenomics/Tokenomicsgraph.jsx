// import "./styles.css";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Private Presale 20.00%", value: 4200000000 },
    { name: "Public Presale 34.29%", value: 7200000000 },
    { name: "Developer Team 7.14%", value: 1500000000 },
    { name: "Bouns & Giveaway 7.09%", value: 1488000000 },
    { name: "Marketing 7.14%", value: 1500000000 },
    { name: "Liquidity On PCS 24.34%", value: 5112000000 },
  ];

const COLORS = [
  "#eab308",
  "#1ba3e7",
  "black",
  "#FF7F00",
  "#4851ff",
  "#BC7534",
];

const RADIAN = Math.PI / 180;

export default function Tokenomicsgraph() {
  return (
    <ResponsiveContainer width="100%" height={500}  >

    <PieChart >
      <Pie
        data={data}
        cx={170}
        cy={200}
        labelLine={false}
        // label={renderCustomizedLabel}
        innerRadius={80}
        // outerRadius={50}
        fill="#8884d8"
        dataKey="value"
      >
        
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    </ResponsiveContainer>
  );
}

// <Pie
// dataKey="value"
// data={data02}
// cx={500}
// cy={200}
// innerRadius={40}
// outerRadius={80}
// fill="#82ca9d"
// />
// <Tooltip />
