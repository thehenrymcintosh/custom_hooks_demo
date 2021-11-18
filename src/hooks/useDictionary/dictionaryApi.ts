
import { Response } from "./types";

const cache: Record<string, Response> = {};

export async function define(word: string) : Promise<Response> {
  if (cache[word]) return cache[word];
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const r = await response.json() as Response;
    cache[word] = r;
    return r;
  } catch (error) {
    return {
      title: "Unknown error",
      message: "We're sorry, something went wrong.",
      resolution: "Please try again later",
    }
  }
}

