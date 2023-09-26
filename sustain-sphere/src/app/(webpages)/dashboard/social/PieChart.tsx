"use client"

import { Card, Title, DonutChart} from "@tremor/react";

const cities = [
    {
        name: "2020",
        sales: 9800,
    },
    {
        name: "2021",
        sales: 4567,
    },
    {
        name: "2022",
        sales: 3908,
    },
];



const valueFormatter = (number: number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const PieChart = () => {
  
    return (
        <Card className="w-96 shadow-lg bg-white text-black">
        <Title className="text-center">Yearly Safety Hazard Incident Count</Title>
        <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={["blue", "blue", "indigo"]}
        />
    </Card>
    )
};

export default PieChart
