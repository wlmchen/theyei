export default function Prompt() {
  return (
    <div className="bg-gray-100" id="prompt">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y-2 divide-gray-200 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Prompt
        </h2>
        <div className="mt-6 pt-5 text-gray-600 text-xl pb-1">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 md:justify-center">
            <div className="">
              <p className="text-xl font-medium mt-4 ml-1 text-gray-700">
                Evaluate the motivations and short/long-term political, economic, and social impacts of President Trump’s protectionist policies. Then, propose alternative policy solutions to address their challenges and/or unintended consequences, either as supplements or replacements.
              </p>
            </div>
            {/* <div className="md:w-1/2">
              <ScheduleTable
                schedule={ceremonySchedule}
                title="Debate Round (4/22/23)"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
