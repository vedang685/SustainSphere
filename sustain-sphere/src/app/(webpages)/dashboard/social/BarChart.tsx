"use client"


import { Card, Title, BarChart} from "@tremor/react";
const data = [
  {
    state: "Alaska",
    "Store A": 890,
    "Store B": 338,
    "Store C": 538,
    "Store D": 396,
    "Store E": 138,
    "Store F": 436,
  },
  {
    state: "Michigan",
    "Store A": 289,
    "Store B": 233,
    "Store C": 253,
    "Store D": 333,
    "Store E": 133,
    "Store F": 533,
  },
  {
    state: "New York",
    "Store A": 389,
    "Store B": 233,
    "Store C": 653,
    "Store D": 533,
    "Store E": 233,
    "Store F": 733,
  },
];

const dataFormatter = (number: number | bigint) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

export default function FirstContainer() {
  return (
    <div className="text-black">
 
        <Card>
          <Title>Sales: Entries</Title>
          <BarChart
            data={data}
            index="state"
            categories={[
              "Store A",
              "Store B",
              "Store C",
              "Store D",
              "Store E",
              "Store F",
            ]}
            colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
            valueFormatter={dataFormatter}
            // marginTop="mt-6"
            // yAxisWidth={"mt-6"}
          />
        </Card>
    </div>
  );
}