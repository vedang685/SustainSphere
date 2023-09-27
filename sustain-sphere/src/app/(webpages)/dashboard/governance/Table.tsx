import React from 'react';

const generateRandomData = () => {
  const trackingId = '#' + Math.floor(Math.random() * 9000 + 1000);
  const organization = 'Org ' + Math.floor(Math.random() * 20 + 1);
  const year = 2022;
  const conflictOfInterest = Math.random() < 0.5 ? 'Yes' : 'No';
  const bribery = Math.random() < 0.5 ? 'Cash on Delivery' : 'Transfer Bank';
  const moneyLaundering =
    Math.random() < 0.33
      ? 'Processed'
      : Math.random() < 0.5
      ? 'Delivered'
      : 'Cancelled';
  return {
    trackingId,
    organization,
    year,
    conflictOfInterest,
    bribery,
    moneyLaundering,
  };
};

const Table = () => {
  const data = Array.from({ length: 7 }, generateRandomData);

  return (
    <div className="container mx-auto">
        <div className="bg-green-600 w-full h-[10vh] rounded-lg">
            <div className="pt-7 px-5 text-2xl text-white font-bold">
                Anti-Corruption
            </div>
        </div>
      <table className="min-w-full bg-white text-black rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white text-center">
          <tr>
            <th className="py-2 px-4">Tracking Id</th>
            <th className="py-2 px-4">Organization</th>
            <th className="py-2 px-4">Year</th>
            <th className="py-2 px-4">Conflict of Interest</th>
            <th className="py-2 px-4">Bribery</th>
            <th className="py-2 px-4">Money Laundering</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className='text-center'>
              <td className="py-2 px-4">{item.trackingId}</td>
              <td className="py-2 px-4">{item.organization}</td>
              <td className="py-2 px-4">{item.year}</td>
              <td className="py-2 px-4">{item.conflictOfInterest}</td>
              <td className="py-2 px-4">{item.bribery}</td>
              <td className="py-2 px-4">{item.moneyLaundering}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
