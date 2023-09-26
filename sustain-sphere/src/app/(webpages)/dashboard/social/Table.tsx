

const Table = () => {
 
  const tableData = [
    {
      company: 'Nvidia Corporation',
      logoUrl: 'https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-grn-500x200-4c25-p@2x.png',
      col1: '',
      col2: '',
      col3: '',
      col4: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check2" viewBox="0 0 16 16"><path d="M1.293 7.293a1 1 0 0 1 1.414-1.414L6 9.586l7.293-7.293a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8z"/></svg>',
      col5: 'tick',
      col6: 'tick'
    },
    {
      company: 'Adobe Inc.',
      logoUrl: 'data:image/png;base64,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',
      col1: '',
      col2: 'Tick',
      col3: 'Tick',
      col4: '',
      col5: 'Tick',
      col6: ''
    },
    {
        company: 'Advanced Micro Devices Inc.',
        logoUrl: 'https://1000logos.net/wp-content/uploads/2020/05/AMD-Logo.png',
        col1: 'Tick',
        col2: '',
        col3: 'Tick',
        col4: 'Tick',
        col5: '',
        col6: 'Tick'
      },
      {
        company: 'Broadcom Inc.',
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJQ7YLk_nSHH-6W7i6dcngSNu6e6ndqRrsKsJZA05&s',
        col1: '',
        col2: 'Tick',
        col3: 'Tick',
        col4: '',
        col5: 'Tick',
        col6: 'Tick'
      },
      {
        company: 'Cisco Systems Inc.',
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0K6FNDVczOs64YPG2mvH1YmjvvwnRkyLjih9ymqNU&s',
        col1: 'Tick',
        col2: 'Tick',
        col3: 'Tick',
        col4: 'Tick',
        col5: '',
        col6: 'Tick'
      },
    // Add more rows as needed
  ];

  return (
    <div className="">
      <table className="min-w-full border-collapse border border-gray-300 text-black">
        <thead>
          <tr className="h-16 text-center">
            <th className="px-2 py-3 bg-gray-100  text-xs leading-4 font-bold  uppercase ">
           
            </th>
            <th className="px-16 py-3 w-10 bg-gray-100  text-xs leading-4 font-bold  uppercase ">
              Carbon Related (5)
            </th>
            <th className="px-16 py-3 w-10 bg-gray-100  text-xs leading-4 font-bold  uppercase ">
            Clean Energy (4)
            </th>
            <th className="px-16 py-3 w-10 bg-gray-100  text-xs leading-4 font-bold  uppercase ">
            Environmental Incidents (5)
            </th>
            <th className="px-16 py-3 w-10 bg-gray-100  text-xs leading-4 font-bold  uppercase ">
            ESG Metrics (5)
            </th>
            <th className="px-16 py-3 w-10 bg-gray-100  text-xs leading-4 font-bold  uppercase ">
            ESG Report (4)
            </th>
            <th className="px-16 py-3 w-10 bg-gray-100  text-xs leading-4 font-bold  uppercase ">
            Sustainability (4)
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 text-center' : 'bg-white text-center'}>
              <td className="px-2">
                <div className="flex items-center gap-2">
                  <img
                    src={rowData.logoUrl}
                    alt={`${rowData.company} Logo`}
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  {rowData.company}
                </div>
              </td>
              <td className="px-16 py-3 ">{rowData.col1}</td>
              <td className="px-16 py-3 ">{rowData.col2}</td>
              <td className="px-16 py-3 ">{rowData.col3}</td>
              <td className="px-16 py-3 ">
                {index === 0 ? (
                  <img
                    src={rowData.col4} // Use the SVG URL directly
                    alt="Checkmark"
                    className="h-6 w-6 text-green-500"
                  />
                ) : rowData.col4}</td>
              <td className="px-16 py-3 ">{rowData.col5}</td>
              <td className="px-16 py-3 ">{rowData.col6}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
