import React from "react";

export default function FeaturedOn() {
  return (
    <div className="bg-gray-900">
      <div className="container py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <h2 className="max-w-md my-auto mx-auto text-3xl font-semibold text-gray-400 text-center lg:max-w-xl lg:text-left">
            Featured On
          </h2>
          <div className="col-span-2 flow-root self-center mt-8 lg:mt-0">
            <div className="-mt-4 -ml-8 flex md:flex-nowrap flex-wrap justify-between lg:-ml-4">
              {[
                {
                  href:
                    "https://markets.businessinsider.com/news/stocks/youth-run-nonprofit-transforming-economics-and-financial-literacy-education-1029503063#",
                  imgURL: "img/logos/other/featured/business-insider.png",
                  brightness: 1.6,
                  alt: "business insider",
                },
                {
                  href:
                    "https://finance.yahoo.com/news/youth-run-nonprofit-transforming-economics-203600069.html",
                  imgURL: "img/logos/other/featured/yahoo-finance.png",
                  brightness: 2.2,
                  alt: "yahoo finance",
                },
                {
                  href:
                    "https://www.marketwatch.com/press-release/youth-run-nonprofit-transforming-economics-and-financial-literacy-education-2020-08-13",
                  imgURL: "img/logos/other/featured/market-watch.png",
                  brightness: 1.1,
                  alt: "market watch",
                },
                {
                  href:
                    "https://news.yahoo.com/news/youth-run-nonprofit-transforming-economics-203600069.html",
                  imgURL: "img/logos/other/featured/yahoo-news.png",
                  brightness: 2.2,
                  alt: "yahoo news",
                },
              ].map((link) => (
                <div
                  key={link.href}
                  className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4"
                >
                  <a href={link.href} target="_blank">
                    <img
                      className="h-12 lg:h-14"
                      src={link.imgURL}
                      alt={link.alt}
                      style={{
                        filter: `grayscale(100%) brightness(${link.brightness})`,
                      }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
