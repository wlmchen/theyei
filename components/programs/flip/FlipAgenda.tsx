const schedule = [
  {
    time: '5:00 pm',
    date: 'Friday, May 12th',
    description: 'Prompt Released',
  },
  {
    time: '5:00 pm',
    date: 'Sunday, May 14th',
    description: 'Submission Deadline',
  },
  {
    time: '-',
    date: 'Monday, May 15th to \n\n Friday, May 19th',
    description: 'Judging Period',
  },
  {
    time: '5:00 PM',
    date: 'Saturday, May 20th',
    description: 'Award Ceremony',
  },
]


export default function FlipAgenda() {
  return (
    <div className="max-w-2xl w-full m-auto pt-10 pb-2 px-4">
      <div className="mx-auto text-center">
        <h2 className="text-center text-2xl leading-8 font-extrabold tracking-tight sm:text-3xl"></h2>
      </div>
      <div className="mt-10">
      <div className="w-full mx-auto m-auto flex flex-col mb-10 mt-4">
        <div className="-my-2 align-middle sm:-mx-8 lg:-mx-22">
          <div className="py-2 align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                  <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                     Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time (PST)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {schedule.map((person, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                        {person.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                        {person.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-500">
                        {person.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

      
    </div>
  )
}
