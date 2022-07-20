import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_SECRET

function Map() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/websiteyei/cl5sh8veu000v14qflf1djy2x/draft',
      center: [-70, 25],
      zoom: 1,
    })
    map.current.on('click', 'fullclubdata', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice()
      const name = e.features[0].properties.name
      const founding = e.features[0].properties?.founding
      const primaryFounding = e.features[0].properties?.primaryFounding
      const region = e.features[0].properties.region
      const email = e.features[0].properties.email
      const imgSrc = `/img/clubs/current-clubs/${name
        .replace(/[\W_]+/g, '-')
        .toLowerCase()}.jpg`

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
      }

      new mapboxgl.Popup({ offset: [0, -520], className: 'mbClubPopup' })
        .setLngLat(coordinates)
        .setHTML(
          `
              <div><h4 class="text-xs font-semibold leading-4 pr-8 mb-3">${name}</h4>
              
              
              <img
              class="h-30 w-full bg-gray-800 object-cover rounded-md"
              src="${imgSrc}"
              alt="${name}"
            />
              <div class="text-gray-500 text-xs mt-4 leading-5">
              Location: ${region}<br />
              ${
                email &&
                `
                <p class="w-full text-ellipsis truncate">Contact: <a
                class="text-xs whitespace-nowrap underline"
                  target="_blank"
                  href=${'mailto:' + email}}
                >
                  ${email}
                  
                </a>
                ${
                  founding
                    ? `<div class="mt-2">
                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      ${primaryFounding ? 'Primary ' : ''}Founding Club
                    </span>
                  </div>
                </div>
                </p>`
                    : ``
                }
              `
              }
            </div></div>`
        )
        .addTo(map.current)
    })

    map.current.on('mouseenter', 'fullclubdata', (e) => {
      map.current.getCanvas().style.cursor = 'pointer'
    })

    map.current.on('mouseleave', 'fullclubdata', () => {
      map.current.getCanvas().style.cursor = ''
    })
  })
  return (
    <div
      ref={mapContainer}
      className="hidden sm:block mt-12 w-full h-[500px] shadow-2xl max-w-7xl m-auto"
    />
  )
}

export default Map
