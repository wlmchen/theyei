import React from 'react'

export default function Speaker() {
  return (
    <div className="bg-white pt-16 lg:py-24">
      <div className="pb-16 bg-yei-secondary-brighter lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="mt-2 lg:m-0 lg:pl-8">
            <div className="mx-auto">
              <div>
                <div className="mt-6 text-xl text-white px-8 pb-16">
                  <h1 className="text-3xl sm:text-4xl tracking-tight font-black pt-8">
                    About the Judges
                  </h1>
                  <div className="flex flex-wrap lg:flex-nowrap items-center gap-6 mt-6">
                    <div className="md:flex-[0_0_50%] md:basis-1/2">
                      <div className="text-4xl font-bold text-lg">Derek S Stimel</div>
                      <div className="mt-2">
                        Derek S Stimel is an Associate Professor of Teaching Economics
                        at UC Davis. Read his <a className="text-yei-primary-main underline" href="https://economics.ucdavis.edu/people/derek-stimel">bio</a>.
                      </div>
                    </div>
                    <div className="md:flex-[0_0_50%] md:basis-1/2 items-center justify-center">
                      <img
                        className="w-full max-w-xs sm:max-w-sm rounded shadow-sm"
                        src="/img/people/speakers/derek-stimel.jpg"
                        alt="Derek S Stimel"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap lg:flex-nowrap items-center gap-6 mt-6">
                    <div className="md:flex-[0_0_50%] md:basis-1/2">
                      <div className="text-4xl font-bold text-lg">Piotr Dworczak</div>
                      <div className="mt-2">
                      Piotr Dworczak is an Associate Professor in the Department of Economics at Northwestern University. Read his <a className="text-yei-primary-main underline" href="https://economics.ucdavis.edu/people/derek-stimel">bio</a>.
                      </div>
                    </div>
                    <div className="md:flex-[0_0_50%] md:basis-1/2 items-center justify-center">
                      <img
                        className="w-full max-w-xs sm:max-w-sm rounded shadow-sm"
                        src="/img/people/speakers/piotr-dworczak.jpg"
                        alt="Piotr Dworczak"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
