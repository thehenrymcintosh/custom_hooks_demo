import React from 'react'
import { GeoLocComponent } from "./types";

const pending: GeoLocComponent<"Pending"> = ({state}) => {
  if (state.status !== "Pending") return null;
  return (
    <div>
      Loading your location...
    </div>
  )
}

export default pending
