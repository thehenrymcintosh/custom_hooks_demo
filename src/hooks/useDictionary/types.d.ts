export interface Entry {
  word:      string;
  phonetic:  string;
  phonetics: Phonetic[];
  origin:    string;
  meanings:  Meaning[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions:  Definition[];
}

export interface Definition {
  definition: string;
  example:    string;
  synonyms:   string[];
  antonyms:   any[];
}

export interface Phonetic {
  text:  string;
  audio: string;
}

export interface Error {
  title:      string;
  message:    string;
  resolution: string;
}


export type Response = Error | Entry[];
export type PossibleResponse = Response | null;