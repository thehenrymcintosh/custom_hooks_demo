import React from 'react'
import { GeoLocComponent } from "./types";

const completed: GeoLocComponent = ({state}) => {
  if (!state.location) return null;
  return (
    <div>
      You're at: {state.location.coords.latitude},{state.location.coords.longitude}
    </div>
  )
}

export default completed
