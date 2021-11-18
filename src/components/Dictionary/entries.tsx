
import React from 'react'
import { Entry, PossibleResponse } from "./types";
import AudioPlayer from "../AudioPlayer";

type EntriesProps = {
  response: PossibleResponse,
}

export default function Entries({response}: EntriesProps) {
  if (response === null) return null;
  if (!Array.isArray(response)) return null;
  return <>
    {response.map(entry => <SingleEntry entry={entry} /> )}
  </>
}


type EntryProps = {
  entry: Entry,
}

function SingleEntry({entry}: EntryProps) {
  return <div>
    <h1>{entry.word}</h1>
    <h2>Origin: {entry.origin}</h2>
    {entry.meanings.map(meaning => (
      <p>{meaning.definitions.map(d => d.definition).join(",")}</p>
    ))}
    {entry.phonetics[0] ? <AudioPlayer source={entry.phonetics[0].audio} /> : null}
  </div>
}
