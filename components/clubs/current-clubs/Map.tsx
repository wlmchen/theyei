

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./MapComponent'), {
  ssr: false,
})

export default Map
