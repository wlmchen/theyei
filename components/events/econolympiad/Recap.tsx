import RecapPodium from './RecapPodium'

export default function Recap() {
  return (
    <div id="recap" className="relative bg-gray-100">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 xl:pr-16">
            <div className="mt-3 max-w-md mx-auto text-lg text-gray-500 font-medium sm:text-xl md:mt-5  md:max-w-3xl">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="xl:inline">EconOlympiad 2024 </span>
                <span className="text-yei-primary-main xl:inline">Recap</span>
              </h1>
              <p className="mt-8">Thank you to all of our competitors! </p>
              <p className="mt-2">
                On May 11th, 2024, competitors applied their economic knowledge
                and competed virtually for the chance to earn cash prizes and
                become Champions of the 2024 EconOlympiad. It was amazing to see
                such passion for economics from all across the world. Whether
                this is your first time hearing about EconOlympiad, or if you’re
                already a seasoned competitor, we look forward to seeing you
                next spring!
              </p>
              <RecapPodium />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
