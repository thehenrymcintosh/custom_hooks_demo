import React from 'react'
import { GeoLocComponent } from "./types";

const FailureErrorMap = {
  [GeolocationPositionError.PERMISSION_DENIED]: "Permission to read your location was denied.",
  [GeolocationPositionError.POSITION_UNAVAILABLE]: "Unable to read your location. Please try again later.",
  [GeolocationPositionError.TIMEOUT]: "Fetching your location timed out. Please try again later.",
}

const failed: GeoLocComponent<"Failed"> = ({state}) => {
  if (!state.error) return null;
  const friendlyError = FailureErrorMap[state.error.code];
  return (
    <div>
      Something went wrong! {friendlyError}
    </div>
  )
}

export default failed
