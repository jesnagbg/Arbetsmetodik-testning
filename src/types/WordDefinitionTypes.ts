interface WordDefinition {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin?: string;
  meanings: Meaning[];
}

interface Phonetic {
  text: string;
  audio?: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface Definition {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}

export type {Definition, Meaning, Phonetic, WordDefinition};
