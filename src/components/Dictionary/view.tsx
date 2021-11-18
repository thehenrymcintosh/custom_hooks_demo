import React from 'react'
import { PossibleResponse } from "./types";

import ErrorView from "./error";
import EntriesView from "./entries"; 


interface DictionaryViewProps {
  word: string, 
  setWord: (word: string) => void;
  response: PossibleResponse,
} 

export default function DictionaryView({word, response, setWord}: DictionaryViewProps) {
  return (
    <div>
      <h1>Dictionary!</h1>
      <p>Type to begin</p>
      <label>
        Word Lookup:
        <input type="text" onChange={(e) => setWord(e.target.value)} value={word} />
      </label>
      <ErrorView response={response} />
      <EntriesView response={response} />
    </div>
  )
}