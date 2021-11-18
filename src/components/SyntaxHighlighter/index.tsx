import React from 'react'
import useDictionary from "../../hooks/useDictionary";

type Props = {
  children: string,
}

const Text : React.FC<Props> = ({children}) => {
  const words = typeof children === "string" ? children : "";
  if ( !words ) return <>{children}</>;
  return <>
    {words.split(" ").map(word => <><Highlight>{word}</Highlight>{" "}</>)}
  </>
}

const Highlight : React.FC<Props> = ({children}) => {
  const word = typeof children === "string" ? children : "";
  const response = useDictionary({word, delay: 0});
  if ( !word ) return <>{children}</>;
  if ( !Array.isArray(response) || response.length === 0 ) return <>{children}</>;
  const { partOfSpeech } = response[0].meanings[0];
  return <span className={partOfSpeech}>{children}</span>
}


export default Text;