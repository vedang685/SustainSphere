import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend, plugins} from 'chart.js';
import {Doughnut} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


export function DonApp({ label, data }: { label: string ; data: any }) {
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
            ctx.fillText(label,xCoor,yCoor)

        }
    }
    // return <Pie data={data} />;
    return <Doughnut
        options={{circumference:180,
        rotation:270}}
        plugins={[plug]}
        data={data}/>
}
