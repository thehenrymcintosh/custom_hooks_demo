import React from 'react'
import useDictionary from "../../hooks/useDictionary";

type Props = {
  children: string,
}

const Definition : React.FC<Props> = ({children}) => {
  const word = typeof children === "string" ? children : "";
  const response = useDictionary({word, delay: 0});
  if ( !word ) return <>{children}</>;
  if ( !Array.isArray(response) || response.length === 0 ) return <>{children}</>;
  const { definitions, partOfSpeech } = response[0].meanings[0];
  return <dfn title={`${partOfSpeech}: ${definitions[0].definition}`}>{children}</dfn>
}

export default Definition;