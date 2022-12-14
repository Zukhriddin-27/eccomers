import React from 'react'
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  GeolocationControl,
  TypeSelector,
} from '@pbe/react-yandex-maps'
import './style.css'
export default function Maps({ data }) {
  const defaultState = {
    center: [41.311081, 69.240562],
    default: [41.311081, 69.240562],
    zoom: 12,
    control: [],
  }

  return (
    <YMaps>
      {/* query={{ apikey: 'afbb60c1-0761-48a5-b821-b566bf220d8b', lang: 'EN' }} */}
      <Map
        style={{ width: '880px', height: '416px' }}
        defaultState={defaultState}
      >
        <FullscreenControl />
        <GeolocationControl
          options={{
            float: 'left',
          }}
        />
        <TypeSelector
          options={{
            float: 'right',
          }}
        />

        <Placemark geometry={defaultState.center} />
      </Map>
    </YMaps>
  )
}
