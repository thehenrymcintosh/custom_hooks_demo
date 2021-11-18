import React, { useState } from 'react'
import useDictionary from "../../hooks/useDictionary";

import DictionaryView from './view';

export default function Dictionary() {
  const [word, setWord] = useState("");
  const response = useDictionary({word});

  return <DictionaryView response={response} word={word} setWord={setWord}/>;
}