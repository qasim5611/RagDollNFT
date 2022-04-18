import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Mar 8",
    profit: 0,
    investment: 0
  },
  {
    name: "Mar 10",
    profit: 4.7,
    investment: 5
  },
  {
    name: "Mar 12",
    profit: 0.3,
    investment: 0.5
  },
  {
    name: "Mar 14",
    profit: 0.4,
    investment: 0.6
  },
  {
    name: "Mar 16",
    profit: 3.8,
    investment: 3.5
  },
  {
    name: "Mar 18",
    profit: 2,
    investment: 2.2
  },
  {
    name: "Mar 20",
    profit: 5,
    investment: 5.2
  },
  {
    name: "Mar 22",
    profit: 4.9,
    investment: 5.1
  },
  {
    name: "Mar 24",
    profit: 5,
    investment: 5.2
  },
  {
    name: "Mar 26",
    profit: 2.7,
    investment: 3.2
  },
  {
    name: "Mar 28",
    profit: 2,
    investment: 2.2
  },
  {
    name: "Mar 30",
    profit: 2.1,
    investment: 2.3
  },
  {
    name: "Mar 31",
    profit: 2,
    investment: 2.2
  },
  {
    name: "Apr 1",
    profit: 2.3,
    investment: 2.7
  },
  {
    name: "Apr 2",
    profit: 2.2,
    investment: 2.5
  },
  {
    name: "Apr 3",
    profit: 1,
    investment: 1.2
  },
  {
    name: "Apr 4",
    profit: 3.2,
    investment: 3.4
  },
  {
    name: "Apr 5",
    profit: 5.7,
    investment: 6
  },
  {
    name: "Apr 6",
    profit: 5.6,
    investment: 6
  },
  {
    name: "Apr 7",
    profit: 5.7,
    investment: 6
  },
  {
    name: "Apr 8",
    profit: 5,
    investment: 5.5
  },
  {
    name: "Apr 9",
    profit: 5.5,
    investment: 5.3
  },
  {
    name: "Apr 10",
    profit: 4,
    investment: 5
  },
  {
    name: "Apr 11",
    profit: 4.2,
    investment: 4.8
  },
  {
    name: "Apr 12",
    profit: 3.9,
    investment: 4
  },
  {
    name: "Apr 13",
    profit: 3.9,
    investment: 4
  },
  {
    name: "Apr 14",
    profit: 4.3,
    investment: 5.5
  },
  {
    name: "Apr 15",
    profit: 4.4,
    investment: 5.1
  }
];

export default () => {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={data}>
        <XAxis dataKey="name" hide={true} />
        <YAxis hide={true} />
        <Line
          type="monotone"
          dataKey="investment"
          stroke="#816BFF"
          strokeWidth={2.5}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="profit"
          stroke="#C8D1FE"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
