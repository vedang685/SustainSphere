import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend, plugins} from 'chart.js';
import {Doughnut} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

 const data = {
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19],
            backgroundColor: [
                'rgb(17,153,88)',
                'rgb(40,42,40)',
                'rgba(52,51,51,0.2)',
            ],
            borderColor: [
                'rgba(61,58,53,0.2)',
                'rgba(61,58,53,0.2)'
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
