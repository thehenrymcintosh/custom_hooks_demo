import React from 'react'
import { GeoLocComponent } from "./types";

const FailureErrorMap = {
  [GeolocationPositionError.PERMISSION_DENIED]: "Permission to read your location was denied.",
  [GeolocationPositionError.POSITION_UNAVAILABLE]: "Unable to read your location. Please try again later.",
  [GeolocationPositionError.TIMEOUT]: "Fetching your location timed out. Please try again later.",
}

const failed: GeoLocComponent = ({state}) => {
  if (!state.error) return null;
  return (
    <div>
      Something went wrong! {FailureErrorMap[state.error.code]}
    </div>
  )
}

export default failed
