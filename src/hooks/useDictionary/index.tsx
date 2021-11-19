import {useState, useEffect, useCallback} from "react";
import { Response, Entry, PossibleResponse } from "./types";
import { define } from "./dictionaryApi";
import { debounce } from "./helpers";


type Props = {
  word: string,
  delay?: number,
}

const useDictionary = ({word, delay = 200} : Props) : PossibleResponse => {
  const [response, setResponse] = useState<PossibleResponse>(null);

  const defineDebounced = useCallback( (word) => debounce(define, delay)(word), [delay]);

  useEffect(() => {
    if (!word) return setResponse(null);
    let cancelled = false;

    defineDebounced(word)
      .then( r => !cancelled && setResponse(r) );

    return () => { 
      cancelled = true 
    };
  }, [defineDebounced, word])

  return response;
}

export default useDictionary
export type {
  Response,
  Entry,
}