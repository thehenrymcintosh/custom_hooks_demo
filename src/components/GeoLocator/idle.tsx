import React from 'react'
import { GeoLocComponent } from "./types";

const idle: GeoLocComponent<"Idle"> = ({state, locate}) => {
  if (state.status !== "Idle") return null;
  return (
    <div>
      <button onClick={locate}>Locate yourself!</button>
    </div>
  )
}

export default idle
