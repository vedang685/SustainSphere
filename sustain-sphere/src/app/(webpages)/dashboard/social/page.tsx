import Graph from "./BarChart";
import PieChart from "./PieChart";
import Table from "./Table";


 const Social = () => {
    return ( 
    <div className="py-8 px-12">
        <div className="py-12">
        <h1 className="text-5xl font-bold text-gray-800">Social</h1>
        </div>
        <div className="flex flex-row gap-10">
        <div className="basis-1/2">
            <PieChart />
        </div>
        <div className="basis-1/2">
            <Graph />
        </div>
        </div>
        <div className="py-10">
            <Table />
        </div>
        </div>
    );
}

export default Social