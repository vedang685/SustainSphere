import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend, plugins} from 'chart.js';
import {Doughnut} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

 const data = {
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export function DonApp() {
    const plug:any ={
        id:'doughnutLabel',
        beforeDatasetDraw(chart:any,args:any, pluginOptions:any){
            const {ctx,data} = chart;
            ctx.save();
            const xCoor = chart.getDatasetMeta(0).data[0].x;
            const yCoor = chart.getDatasetMeta(0).data[0].y;
            ctx.font ='bold 14px sans-serif'
            ctx.fillStyle='rgba(54, 162, 235, 1)'
            ctx.textAlign='center'
            ctx.textBaseline='middle'
            ctx.fillText(`23%`,xCoor,yCoor)

        }
    }
    // return <Pie data={data} />;
    return <Doughnut
        options={{circumference:180,
        rotation:270}}
        plugins={[plug]}
        data={data}/>
}
