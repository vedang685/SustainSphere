import Graph from "./BarChart";
import PieChart from "./PieChart";
import Table from "./Table";


 const Social = () => {
    return ( 
    <div className="py-8 px-20">
        <div className="py-12">
        <h1 className="text-5xl font-bold text-gray-800">Social</h1>
        </div>
        <div className="flex flex-row gap-10 pb-10">
        <div className="basis-1/2 h-96 ">
            <PieChart />
        </div>
        <div className="basis-1/2 h-96 bg-white shadow-lg">
            <Graph />
        </div>
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 pt-10 pb-5">Topic Prevelance</h1>
        <div className="pb-10">
            <Table />
        </div>
        </div>
    );
}

export default Social