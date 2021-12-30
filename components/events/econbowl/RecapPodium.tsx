const team = [
  {
    name: 'The Eagles',
    school: 'Enloe High',
    names: ['Chirag B.', 'Riddhik B.', 'Derek Z.', 'Sam I.'],
  },
  {
    name: 'Vink',
    school: 'BASIS Scottsdale',
    names: ['Emily C.', 'Ritvik R.', 'Tanish G.'],
  },
  {
    name: 'Amogus',
    school: `Land O' Lakes High`,
    names: ['Allen H.', 'Hannah B.', 'Arossa A.', 'William S.'],
  },
  {
    name: "Macro Minds",
    school: 'The Harker School',
    names: ['Saahas K.', 'Anirudh K.', 'Daniel F.', 'Rohan R.'],
  },
]

const individual = [
  {
    name: 'Cameron Dolbow',
  },
  {
    name: 'Zev van Zanten',
  },
  {
    name: 'Grace Liu',
  },
]

export default function RecapPodium() {
  return (
    <div className="pt-8 pb-2 mb-4 flex flex-col w-auto h-auto overflow-x-auto overflow-y-visible">
      <h1 className="mb-3 text-xl font-medium">3rd Annual EconBowl Podium (Team)</h1>
      <div className="mb-8">
        <div className="align-middle inline-block">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-yei-primary-main text-center lg:text-left text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-4 xl:px-6 py-3 text-xs font-medium uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-4 xl:px-6 py-3 text-xs font-medium uppercase tracking-wider"
                  >
                    Team Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 xl:px-6 py-3 text-xs font-medium uppercase tracking-wider"
                  >
                    School
                  </th>
                  <th
                    scope="col"
                    className="px-4 xl:px-6 py-3 text-xs font-medium  uppercase tracking-wider"
                  >
                    Members
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {team.map((team, i) => (
                  <tr
                    key={team.name}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 xl:px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                      {i + 1}
                    </td>
                    <td className="px-4 xl:px-6 py-4 whitespace-nowrap text-xs text-gray-900 font-medium">
                      {team.name}
                    </td>
                    <td className="px-4 xl:px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      {team.school}
                    </td>
                    <td className="px-4 xl:px-6 py-4 whitespace-nowrap text-xs break-all text-gray-500">
                      {team.names.slice(0, 2).join(', ')} <br />
                      {team.names.slice(2).join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <h1 className="mb-3 text-xl font-medium">3rd Annual EconBowl Podium (Individual)</h1>
      <div className="">
        <div className="align-middle inline-block">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-yei-primary-main text-center lg:text-left text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-4 xl:px-6 py-3 text-xs font-medium uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-4 xl:px-6 py-3 text-xs font-medium uppercase tracking-wider"
                  >
                    Individual Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 xl:px-6 py-3 text-xs font-medium text-yei-primary-main uppercase tracking-wider"
                  >
                    School
                  </th>
                  <th
                    scope="col"
                    className="px-4 xl:px-6 py-3 text-xs font-medium text-yei-primary-main uppercase tracking-wider"
                  >
                    School
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {individual.map((person, i) => (
                  <tr
                    key={person.name}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 xl:px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900">
                      {i + 1}
                    </td>
                    <td className="px-4 xl:px-6 py-4 whitespace-nowrap text-xs text-gray-900 font-medium">
                      {person.name}
                    </td>
                    <td className="px-4 xl:px-6 py-4 whitespace-nowrap text-xs text-white font-medium">
                      {person.name}
                    </td>
                    <td className="px-4 xl:px-6 py-4 whitespace-nowrap text-xs text-white font-medium">
                      {person.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
