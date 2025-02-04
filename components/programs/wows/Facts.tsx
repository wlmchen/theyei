export default function Facts({ facts }) {
  return (
    <div className="bg-white overflow-hidden sm:pt-4">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-8">
          The Data
        </div>
        <div className=" grid md:grid-cols-3 gap-4">
          {facts.map((fact, idx) => (
            <div
              className="p-4 bg-yei-primary-main text-white rounded-xl  h-32 md:h-auto"
              key={idx}
            >
              <p className="mb-2">{fact.text}</p>
              <p>
                Read about the research{' '}
                <a className="underline font-bold" href={fact.link}>
                  here
                </a>
                .
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
