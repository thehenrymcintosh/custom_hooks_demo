import React from 'react'
import { GeoLocComponent } from "./types";

const unsupported: GeoLocComponent<"Unsupported"> = ({state}) => {
  if (state.status !== "Unsupported") return null;
  return (
    <div>
      Sorry, your browser doesn't support geolocation!
    </div>
  )
}

export default unsupported
