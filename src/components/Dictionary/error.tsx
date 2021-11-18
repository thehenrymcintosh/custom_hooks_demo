
import React from 'react'
import { PossibleResponse } from "./types";

type ErrorProps = {
  response: PossibleResponse,
}


export default function Error({response}: ErrorProps) {
  if (response === null) return null;
  if (Array.isArray(response)) return null;
  return <div>
    <h1>An error occurred</h1>
    <h2>{response.title}</h2>
    <p>{response.message}</p>
    <p>{response.resolution}</p>
  </div>
}

